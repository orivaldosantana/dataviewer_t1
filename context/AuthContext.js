import React, { useContext, useState, useEffect } from 'react'
import { createFirebaseApp } from '../utils/firebase'
import { getAuth } from 'firebase/auth'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const app = createFirebaseApp()
  const auth = getAuth(app)

  function signup(email, password) {
    console.log('Cadastro: ' + email + ' ' + password)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    console.log('Login: ' + email + ' ' + password)
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setLoading(false)
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    logout,
    signup,
    login
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    console.log('Tentativa: ' + email + ' ' + password)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

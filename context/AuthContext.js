import React, { useContext, useState, useEffect } from 'react'
import { createFirebaseApp } from '../utils/firebase'
import { getAuth } from 'firebase/auth'
import nextConfig from '../next.config';
import {
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

  async function signup(email, password) {
    const bodyReq = {
      email: email,
      password: password
    }

    const signUpResponse = await fetch(`${nextConfig.urlApi}/auth/signup`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyReq)
    });

    return signUpResponse;
  }

  async function login(email, password) {
    const bodyReq = {
      email: email,
      password: password
    }

    const loginResponse = await fetch(`${nextConfig.urlApi}/auth/signin`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyReq)
    });

    return loginResponse;
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
  );
}

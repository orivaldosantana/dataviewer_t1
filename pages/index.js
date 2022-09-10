import React from 'react'
import Login from '../components/login'
//import Signup from '../components/signup'
import { AuthProvider } from '../context/AuthContext'

export default function Home() {
  return (
    <div>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </div>
  )
}

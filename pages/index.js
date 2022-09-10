import React from 'react'
import Signup from '../components/signup'
import { AuthProvider } from '../context/AuthContext'

export default function Home() {
  return (
    <div>
      <AuthProvider>
        <Signup />
      </AuthProvider>
    </div>
  )
}

import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  const [error, setError] = useState('')
  const router = useRouter()
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      router.push('/login')
    } catch {
      setError('Falha ao realizar logout!')
    }
  }

  return (
    <div>
      <h1>Home </h1>
      <p>{currentUser.email}</p>
      <button onClick={handleLogout}> Logout </button>
      <Navbar />
    </div>
  )
}

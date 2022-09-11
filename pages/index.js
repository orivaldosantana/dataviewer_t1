import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const [error, setError] = useState('')
  const router = useRouter()
  const { currentUser, logout } = useAuth()

  return (
    <div>
      <h1>Home </h1>
      <p>{currentUser.email}</p>

      <Navbar />
      <Footer />
    </div>
  )
}

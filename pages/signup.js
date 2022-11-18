import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useAuth } from '../context/AuthContext'
import ErrorCard from '../components/ErrorCard'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Senhas não conferem!')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      router.push('/')
    } catch {
      setError('Falha ao criar uma conta!')
    }
    setLoading(false)
  }

  return (
    <>
      <div className="card">
        <Image src="/dataviewer_full.svg" width={200} height={115} />
        <h2> Cadastro </h2>
        {error && <ErrorCard msg={error} />}
        <form className="form" onSubmit={handleSubmit}>
          <label> Email: </label>
          <input type="email" ref={emailRef} required />
          <label> Senha: </label>
          <input type="password" ref={passwordRef} required />
          <label> Confirmação da senha: </label>
          <input type="password" ref={passwordConfirmRef} required />
          <button disabled={loading} className="button" type="submit">
            Cadastrar
          </button>
        </form>

        <div className="smalltext">
          Já tem conta?{' '}
          <Link href="/">
            <a>Faça Login.</a>
          </Link>
        </div>
      </div>
    </>
  )
}

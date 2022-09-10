import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import ErrorCard from './ErrorCard'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, currentUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      console.log(
        'Submit Login ' +
          emailRef.current.value +
          ' ' +
          passwordRef.current.value
      )
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Falha ao realizar o login!')
    }
    setLoading(false)
  }

  return (
    <>
      <div className="card">
        {currentUser && currentUser.email}
        <h2> Cadastro </h2>
        {error && <ErrorCard msg={error} />}
        <form className="form" onSubmit={handleSubmit}>
          <label> Email: </label>
          <input type="email" ref={emailRef} required />
          <label> Senha: </label>
          <input type="password" ref={passwordRef} required />
          <button disabled={loading} className="button" type="submit">
            Entrar
          </button>
        </form>
        <div>
          Precisa de uma conta?{' '}
          <Link href="/signup">
            <a>Faça seu cadastro.</a>
          </Link>
        </div>
      </div>
    </>
  )
}

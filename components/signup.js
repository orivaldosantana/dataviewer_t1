import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import ErrorCard from './ErrorCard'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup, currentUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Senhas não conferem!')
    }
    try {
      setError('')
      //setLoading(true)
      console.log(
        'Submit ' + emailRef.current.value + ' ' + passwordRef.current.value
      )
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Falha ao criar uma conta!')
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
          <label> Confirmação da senha: </label>
          <input type="password" ref={passwordConfirmRef} required />
          <button disabled={loading} className="button" type="submit">
            Cadastrar
          </button>
        </form>
        <div> Já tem conta? Log In </div>
      </div>
    </>
  )
}

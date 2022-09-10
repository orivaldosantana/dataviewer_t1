import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import ErrorCard from './ErrorCard'

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()
    //signup(emailRef.current.value, passwordRef.current.value)
    console.log(
      'Submit ' + emailRef.current.value + ' ' + passwordRef.current.value
    )
  }

  return (
    <>
      <div className="card">
        <h2> Cadastro </h2>
        <form className="form" onSubmit={handleSubmit}>
          <ErrorCard msg="Testes!" />
          <label> Email: </label>
          <input type="email" ref={emailRef} required />
          <label> Senha: </label>
          <input type="password" ref={passwordRef} required />
          <label> Confirmação da senha: </label>
          <input type="password" ref={passwordConfirmRef} required />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
        <div> Já tem conta? Log In </div>
      </div>
    </>
  )
}

export default Signup

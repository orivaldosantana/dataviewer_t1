import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="card">
        <h2> Sign up </h2>
        <form className="form">
          <label> Email: </label>
          <input type="email" required />
          <label> Senha: </label>
          <input type="password" required />
          <label> Confirmação da senha: </label>
          <input type="password" required />
          <button className="button" type="submit">
            Sign Up{' '}
          </button>
        </form>
        <div> Já tem conta? Log In </div>
      </div>
    </>
  )
}

export default Signup

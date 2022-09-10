import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="Signup">
        <h2> Sign up </h2>
        <form>
          <label> Email: </label>
          <input type="email" required />
          <label> Senha: </label>
          <input type="password" required />
          <label> Confirmação da senha: </label>
          <input type="password" required />
          <button type="submit">Sign Up </button>
        </form>
        <div> Já tem conta? Log In </div>
      </div>
    </>
  )
}

export default Signup

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useAuth } from '../context/AuthContext'
import ErrorCard from '../components/ErrorCard'
import Link from 'next/link'
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";

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
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box className="card">
        <Image src="/dataviewer_full.svg" width={200} height={115} />
        <Typography
          variant="h4"
        >
          Cadastro
        </Typography>
        {error && <ErrorCard msg={error} />}
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            size="small"
            required
            fullWidth
            sx={{
              my: 1
            }}
            ref={emailRef}
          />
          <TextField
            variant="outlined"
            label="Senha"
            type="password"
            size="small"
            required
            fullWidth
            sx={{
              my: 1
            }}
            ref={passwordRef}
          />
          <TextField
            variant="outlined"
            label="Confirmação da senha"
            type="password"
            size="small"
            required
            fullWidth
            sx={{
              my: 1
            }}
            ref={passwordConfirmRef}
          />
          <Button
            disabled={loading}
            className="button"
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#273b73",
              textTransform: "none",
              color: "#efefef",
              "&:hover": {
                bgcolor: "#4163bf"
              }
            }}
          >
            Cadastrar
          </Button>
        </form>

        <Box className="smalltext">
          Já tem conta?{' '}
          <Link href="/">
            <a>Faça Login.</a>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

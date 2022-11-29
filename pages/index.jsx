import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  IconButton,
  AlertTitle
} from "@mui/material";
import { Close } from "@mui/icons-material/";

export default function Login() {
  const router = useRouter();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [ openAlert, setOpenAlert ] = useState(false);
  const [ alertMessage, setAlertMessage ] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const loginResponse = await login(email, password);

      if (loginResponse.status === 401) {
        const { message } = await loginResponse.json();

        setAlertMessage(message);

        setOpenAlert(true);
      } else if (loginResponse.status === 200) {
        const { token } = await loginResponse.json();

        localStorage.setItem("token", token);

        router.push('/classes');
      }

    } catch {
      setAlertMessage('Falha ao realizar o login!');

      setOpenAlert(true);
    }
    setLoading(false);
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "160px"
      }}
    >
      <Box
        sx={{
          width: "700px",
          marginLeft: "30px"
        }}
      >
        <Image src="/logo_name_h.svg" width={180} height={30} priority="true" />
        <Typography
          variant="body1"
        >
          Dataviewer é uma ferramenta de análise de dados que apresenta
          informações relevantes para o professor e aluno, de forma a contribuir
          com a implementação da educação 4.0. A plataforma digital fornece uma
          visão geral para o professor sobre o aprendizado dos seus alunos,
          através de um dashboard. Enquanto que no ambiente do aluno são
          fornecidos feedbacks quanto à assimilação do conteúdo e
          funcionalidades que estimulam o aprendizado de forma personalizada.
          Tudo isso em tempo real e de forma automatizada.{' '}
        </Typography>
        <Image src="/intro_dv.svg" width={652} height={444} />
      </Box>
      <Box
        sx={{
          marginLeft: "80px",
          marginRight: "10vh",
          maxWidth: "460px",
          width: "380px",
          padding: "60px 20px",
          textAlign: "center",
          color: "#273b73",
          backgroundColor: "#fff",
          border: "0px solid #5882fa",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          marginBottom: "auto"
        }}
      >
        <Image src="/dataviewer_full.svg" width={200} height={115} />
        {
          openAlert && (
            <Alert
              severity="error"
              variant="filled"
              action={
                <IconButton
                  size="small"
                  onClick={() => setOpenAlert(false)}
                >
                  <Close />
                </IconButton>
              }
            >
              <AlertTitle>Erro de Login</AlertTitle>
              {alertMessage}
            </Alert>
          )
        }
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            type="email"
            required
            fullWidth
            sx={{
              my: 1
            }}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            label="senha"
            variant="outlined"
            size="small"
            type="password"
            required
            fullWidth
            sx={{
              my: 1
            }}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={loading}
            sx={{
              bgcolor: "#273b73",
              textTransform: "none",
              color: "#efefef",
              "&:hover": {
                bgcolor: "#4163bf"
              }
            }}
          >
            Entrar
          </Button>
        </form>
        <Box className="smalltext">
          Precisa de uma conta?{' '}
          <Link href="/signup">
            <a>Faça seu cadastro.</a>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

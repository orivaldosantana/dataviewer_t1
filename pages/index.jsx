import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import ErrorCard from "../components/ErrorCard";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import {
  Container
} from "@mui/system";

export default function Login() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push('/');
    } catch {
      setError('Falha ao realizar o login!');
    }
    setLoading(false);
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      }}
    >
      <div className={styles.leftSide}>
        <Image src="/logo_name_h.svg" width={180} height={30} priority="true" />
        <p>
          Dataviewer é uma ferramenta de análise de dados que apresenta
          informações relevantes para o professor e aluno, de forma a contribuir
          com a implementação da educação 4.0. A plataforma digital fornece uma
          visão geral para o professor sobre o aprendizado dos seus alunos,
          através de um dashboard. Enquanto que no ambiente do aluno são
          fornecidos feedbacks quanto à assimilação do conteúdo e
          funcionalidades que estimulam o aprendizado de forma personalizada.
          Tudo isso em tempo real e de forma automatizada.{' '}
        </p>
        <Image src="/intro_dv.svg" width={652} height={444} />
      </div>
      <div className={styles.card}>
        <Image src="/dataviewer_full.svg" width={200} height={115} />
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
        <div className="smalltext">
          Precisa de uma conta?{' '}
          <Link href="/signup">
            <a>Faça seu cadastro.</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}

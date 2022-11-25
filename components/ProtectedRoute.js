import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import nextConfig from '../next.config';

const ProtectedRoute = ({ children }) => {
  const router = useRouter()
  const [ isTokenValid, setIsTokenValid ] = useState(null);

  useEffect(() => {
    async function tokenVerify() {
      const token = localStorage.getItem("token");

      const tokenVerifyResponse = await fetch(`${nextConfig.urlApi}/jwt/verify`, {
        method: "GET",
        headers: {
          "Accept": "applicadtion/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (tokenVerifyResponse.status === 200) {
        setIsTokenValid(true);
      } else if (tokenVerifyResponse.status === 401) {
        router.push("/");
        
        setIsTokenValid(false);
      }
    }

    tokenVerify();
  }, []);

  useEffect(() => {
    console.log(isTokenValid);
  }, [isTokenValid]);
  
  if (isTokenValid === null) {
    return <h1>Loading...</h1>
  }
  
  return (
      <>
        {
          isTokenValid && children
        }
      </>
    );
}

export default ProtectedRoute

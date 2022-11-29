import '../styles/globals.css'

import { AuthProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute.jsx'
import Layout from '../components/Layout.jsx'

const noAuthRequired = ['/', '/signup', "/classes"];

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      {noAuthRequired.includes(router.pathname) ? (
        router.pathname === "/classes" ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProtectedRoute>
      )}
    </AuthProvider>
  )
}

export default MyApp

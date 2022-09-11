import '../styles/globals.css'

import { AuthProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'
import Layout from '../components/Layout'

const noAuthRequired = ['/login', '/signup']

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
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

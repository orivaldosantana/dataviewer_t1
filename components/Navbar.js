import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { logout } = useAuth()

  async function handleAnchorLogoutClick(e) {
    try {
      await logout()
      router.push('/')
    } catch {
      console.log('Falha ao realizar logout!')
    }
  }

  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/classes">Turmas</Link>
        </li>
        <li className={styles.li}>
          <Link href="/login">
            <a onClick={handleAnchorLogoutClick}>Sair</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

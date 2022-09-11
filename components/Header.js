import { useAuth } from '../context/AuthContext'
import Image from 'next/image'

const Header = () => {
  const { currentUser } = useAuth()
  return (
    <header>
      <Image src="/logo_name_h.svg" width={220} height={36} />
      <div>
        <h3> Nome Usuário </h3>
        {currentUser.email}
      </div>
    </header>
  )
}

export default Header

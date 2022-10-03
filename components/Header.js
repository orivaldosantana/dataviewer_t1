import { useAuth } from '../context/AuthContext'
import Image from 'next/image'

const Header = () => {
  const { currentUser } = useAuth()
  return (
    <header>
      <Image src="/logo_name_h.svg" width={160} height={26} priority="true" />
      <div>
        <h3> Nome Usuário </h3>
        {currentUser.email}
      </div>
    </header>
  )
}

export default Header

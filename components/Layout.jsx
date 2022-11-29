import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Navbar from './Navbar.jsx'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout

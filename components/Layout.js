import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

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

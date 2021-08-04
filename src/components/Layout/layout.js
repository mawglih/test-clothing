import Header from './header';
import Footer from './footer';
import './layout.scss';

const Layout = ({
  children
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;

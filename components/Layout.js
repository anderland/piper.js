import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from './Hero';
const Layout = ({ children }) => (
  <>
    <Nav />
    <Hero />

    {children}

    <Footer />
  </>
);

export default Layout;

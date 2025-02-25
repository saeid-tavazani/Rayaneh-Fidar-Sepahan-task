import { Outlet } from 'react-router';
import Footer from './footer';
import Navbar from './navbar';
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

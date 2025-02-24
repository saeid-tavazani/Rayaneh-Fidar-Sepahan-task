import { Outlet } from 'react-router';
import Navbar from './navbar';
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;

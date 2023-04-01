import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/login"];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

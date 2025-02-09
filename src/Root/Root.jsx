import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Root = () => {
  return (
    <div className="font-roboto  overflow-hidden">
      <div className="bg-primary">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;

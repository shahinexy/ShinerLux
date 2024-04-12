import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="font-roboto">
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

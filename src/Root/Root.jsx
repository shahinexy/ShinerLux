import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-primary">
        <NavBar></NavBar>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

import { Link } from "react-router-dom";
import error from "../assets/images/png-clipart-logo-brand-green-energy-error-404-text-logo.png";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center h-screen">
        <img className="w-56" src={error} alt="" />
        <p className="text-3xl font-bold text-primary">Page Not Found!!</p>
        <Link to={'/'}>
          <button className="btn bg-primary border border-primary hover:bg-secondary text-white text-lg font-semibold rounded-none mt-8">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

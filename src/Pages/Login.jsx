import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showHide, setShowHide] = useState(true);
  const [passType, setPassType] = useState(true);
  const { signInUser, googleSignIn, gihubSignIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signInUser(data.email, data.pass)
      .then((result) => {
        toast.success("Login Successfull");
        if(result.user){
          navigate(location?.state ? location.state : "/")
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message.split("/")[1].replaceAll(")", ""));
      });
    console.log(data);
  };

  // handle show hide icon
  const handleShowHide = () => {
    setShowHide(!showHide);
    setPassType(!passType);
  };

  //handle socail login
  const handleSocailLogin = (socailProvaider) => {
    socailProvaider()
      .then((res) =>{
        toast.success("Login Successfull");
        if(res.user){
          navigate(location?.state ? location.state : "/")
        }
      })
      .catch();
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="xl:w-1/3 md:w-2/3 text-white p-8 bg-primary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-semibold text-center mb-8">Login Now</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <p>Email</p>
            <input
              {...register("email")}
              className="mt-2 px-3 py-2 w-full text-black"
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="relative">
            <p>Password</p>
            <input
              {...register("pass")}
              className="mt-2 px-3 py-2 w-full text-black"
              type={passType ? "password" : "text"}
              name="pass"
              placeholder="password"
            />
            <span
              onClick={handleShowHide}
              className="absolute bottom-0 right-0 text-primary cursor-pointer p-3"
            >
              {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <div className="pt-5">
            <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none px-8 text-xl">
              Login
            </button>
          </div>
          <p>
            Dont have an account?{" "}
            <Link to={"/register"} className="underline text-secondary">
              Register
            </Link>
          </p>
        </form>
        <div className="flex justify-between md:gap-5 gap-1 mt-5 flex-wrap">
          <button
            onClick={() => handleSocailLogin(googleSignIn)}
            className="btn flex-1 bg-primary text-white rounded-none md:text-lg font-light hover:text-primary"
          >
            <FaGoogle></FaGoogle> Google Login
          </button>
          <button
            onClick={() => handleSocailLogin(gihubSignIn)}
            className="btn flex-1 bg-primary text-white rounded-none md:text-lg font-light hover:text-primary"
          >
            <FaGithub></FaGithub> Github Login
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;

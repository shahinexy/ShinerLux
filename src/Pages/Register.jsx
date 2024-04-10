import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(authContext)

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  // handle submition
  const onSubmit = (data) => {
    const password = data.pass
    if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
       toast.error('Password requires 1 lowercase, 1 uppercase, and min 6 characters.')
       return
    }
    else{
      createUser(data.email, data.pass)
      .then(result=> {
        console.log(result)
        toast.success('Registation Success')
      })
      .catch(error => {
        console.log(error)
        toast.error(error.message.split('/')[1].replaceAll(')', ''))
      })
    }

  };

  return (
    <div>
      <div className="md:w-1/3 text-white p-8 bg-primary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Register Now
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <p>Name</p>
            <input
              {...register("name")}
              className="mt-2 px-3 py-2 w-full text-black"
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div>
            <p>Photo URL</p>
            <input
              {...register("photo")}
              className="mt-2 px-3 py-2 w-full text-black"
              type="text"
              name="photo"
              placeholder="url"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              {...register("email")}
              className="mt-2 px-3 py-2 w-full text-black"
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </div>
          <div>
            <p>Password</p>
            <input
              {...register("pass")}
              className="mt-2 px-3 py-2 w-full text-black"
              type="password"
              name="pass"
              placeholder="password"
              required
            />
          </div>
          {
            errors.pass && <small className="text-red-500">{errors.pass.message}</small>
          }
          <div className="pt-5">
            <button
              // onClick={handleError}
              className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none px-8 text-xl"
            >
              Register
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="underline text-secondary">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="md:w-1/3 text-white p-8 bg-primary mx-auto md:my-20 my-6">
        <h1 className="text-3xl font-semibold text-center mb-8">Register Now</h1>
        <form className="space-y-3">
          <div>
            <p>Name</p>
            <input
              className="mt-2 px-3 py-2 w-full text-black"
              type="text"
              name=""
              placeholder="name"
            />
          </div>
          <div>
            <p>Photo URL</p>
            <input
              className="mt-2 px-3 py-2 w-full text-black"
              type="text"
              name=""
              placeholder="url"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              className="mt-2 px-3 py-2 w-full text-black"
              type="email"
              name=""
              placeholder="email"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              className="mt-2 px-3 py-2 w-full text-black"
              type="password"
              name=""
              placeholder="password"
            />
          </div>
          <div className="pt-5">
            <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none px-8 text-xl">
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
    </div>
  );
};

export default Register;

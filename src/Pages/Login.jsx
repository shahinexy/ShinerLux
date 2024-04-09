import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="md:w-1/3 text-white p-8 bg-primary mx-auto md:my-20 my-6">
            <h1 className="text-3xl font-semibold text-center mb-8">Login Now</h1>
                <form className="space-y-3">
                <div>
                    <p>Email</p>
                    <input className="mt-2 px-3 py-2 w-full text-black" type="email" name="email" placeholder="email"/>
                </div>
                <div>
                    <p>Password</p>
                    <input className="mt-2 px-3 py-2 w-full text-black" type="password" name="pass" placeholder="password"/>
                </div>
                <div className="pt-5">
                    <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none px-8 text-xl">Login</button>
                </div>
                <p>Dont have an account? <Link to={'/register'} className="underline text-secondary">Register</Link></p>
                </form>
                <div className="flex justify-between gap-5 mt-5">
                <button className="btn flex-1 bg-primary text-white rounded-none text-lg font-light hover:text-primary"><FaGoogle></FaGoogle> Login</button>
                <button className="btn flex-1 bg-primary text-white rounded-none text-lg font-light hover:text-primary"><FaGithub></FaGithub> Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
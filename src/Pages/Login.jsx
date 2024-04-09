import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="w-1/3 text-white p-8 bg-primary mx-auto my-20">
                <form className="space-y-3">
                <div>
                    <p>Name</p>
                    <input className="mt-2 px-3 py-1 w-full text-black" type="text" name="" placeholder="name"/>
                </div>
                <div>
                    <p>Email</p>
                    <input className="mt-2 px-3 py-1 w-full text-black" type="email" name="" placeholder="email"/>
                </div>
                <div className="pt-5">
                    <button className="btn bg-secondary border-primary hover:bg-primary text-primary hover:text-white font-semibold rounded-none px-8 text-xl">Login</button>
                </div>
                <p>Dont hane an account? <Link to={'/register'} className="underline text-secondary">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
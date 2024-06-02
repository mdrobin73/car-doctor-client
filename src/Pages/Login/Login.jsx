import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"
import loginImg from "../../assets/images/login/login.svg"
import facebook from "../../assets/icons/Facebook.png"
import linkedIn from "../../assets/icons/Group 25.png"
import google from "../../assets/icons/Google.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const navItems = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/order"}>Order</Link></li>
        <li><Link to={"/orderReview"}>Order Review</Link></li>
        <li><Link to={"/managementInventory"}>Management Inventory</Link></li>
        <li><Link to={"/signUp"}>Sign Up</Link></li>
    </>

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Sign In user-----
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    console.log(result.user);
                    const user = { email };
                    // console.log("User signed in successfully!")

                    // get access token-----
                    axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
                        .then(res => {
                            console.log(res.data.success)
                            if (res.data.success) {
                                navigate(location?.state ? location?.state : "/");
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100 mt-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={"/"} className="text-xl shadow-sm">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navItems}
                    </ul>
                </div>
            </div>
            <div className="lg:flex items-center justify-center p-10">
                <div className="lg:w-1/3 mr-16">
                    <img src={loginImg} alt="" />
                </div>
                <div className="lg:w-1/3 border rounded-xl p-5">
                    <h2 className="text-5xl font-bold text-center">Login</h2>

                    {/* Form------ */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white" type="submit">Sign In</button>
                        </div>
                    </form>
                    <h2 className="text-center">Or Sign in with</h2>
                    <div className="flex gap-5 w-1/2 mx-auto mt-5 mb-10">
                        <Link><img src={facebook} alt="" /></Link>
                        <Link><img src={linkedIn} alt="" /></Link>
                        <Link><img src={google} alt="" /></Link>
                    </div>
                    <h2 className="text-center my-5">Do not have account? <Link to={"/signUp"} className="link font-bold">Sign Up</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;
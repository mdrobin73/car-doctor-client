import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import loginImg from "../../assets/images/login/login.svg"
import facebook from "../../assets/icons/Facebook.png"
import linkedIn from "../../assets/icons/Group 25.png"
import google from "../../assets/icons/Google.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const navItems = <>
        <li><Link to={"/order"}>Order</Link></li>
        <li><Link to={"/orderReview"}>Order Review</Link></li>
        <li><Link to={"/managementInventory"}>Management Inventory</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
    </>

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // Creating an user-----
        createUser(email, password)
            .then(result => {
                if (result.user) {
                    console.log(result.user);
                    console.log("New user created successfully!");
                }
            })
            .catch(error => {
                console.log(error);
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
                    <h2 className="text-5xl font-bold text-center">Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <h2 className="text-center">Or Sign in with</h2>
                    <div className="flex gap-5 w-1/2 mx-auto mt-5 mb-10">
                        <Link><img src={facebook} alt="" /></Link>
                        <Link><img src={linkedIn} alt="" /></Link>
                        <Link><img src={google} alt="" /></Link>
                    </div>
                    <h2 className="text-center my-5">Already have an account? <Link to={"/login"} className="link font-bold">Login</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
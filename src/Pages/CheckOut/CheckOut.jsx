import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);

    const { title, price, _id, img } = service;

    const handleCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const order = {
            customerName: name,
            ServiceDate: date,
            serviceName: title,
            email,
            price,
            img,
            service_id: _id
        }
        console.log(order);

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-10">
                <h2 className="text-2xl font-bold text-center mb-10">Book Services: {title}</h2>
                <form onSubmit={handleCheckOut} className="card-body bg-base-200 rounded-lg shadow-lg p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Email" readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="due"  defaultValue={'$' + price} readOnly className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CheckOut;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";
import axios from "axios";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookings(data);
        //     })
    }, [url])

    const handleDeleteBooking = (id) => {

        const proceed = confirm("Are you sure! you want to delete?")
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        console.log("Deleted successfully!");
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-semibold mb-10">Total Service : {bookings.length}</h2>
            <div className="overflow-x-auto border rounded">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200 rounded text-xl border-2">
                        <tr>
                            <th>Remove</th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => <Booking 
                            key={index} 
                            booking={booking} 
                            bookings={bookings} setBookings={setBookings} handleDeleteBooking={handleDeleteBooking}
                            ></Booking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;


const Booking = ({ booking, bookings, setBookings, handleDeleteBooking }) => {
    const { _id, img, ServiceDate, serviceName, email, price, status } = booking;

    const handleUpdateBooking = id => {
        const proceed = confirm("Are you sure! you want to update/modify?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ status: "confirm" })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = "confirm"
                        const newBookings = [updated, ...remaining]
                        setBookings(newBookings);
                    }
                })
        }
    }

    return (
        <tr>
            <th>
                <div className="text-center">
                    <button onClick={() => handleDeleteBooking(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
            </td>
            <td>{serviceName}</td>
            <td>${price}</td>
            <td>{ServiceDate}</td>
            <td>{email}</td>
            <th>
                {
                    status === "confirm" ? <span>Approved</span>
                    :<button onClick={() => handleUpdateBooking(_id)} className="btn btn-md bg-[#FF3811] text-white hover:text-black">Pending</button>
                }
            </th>
        </tr>
    );
};

export default Booking;
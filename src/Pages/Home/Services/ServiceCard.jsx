import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div>
            <div className="border p-5 rounded-lg shadow-lg space-y-4">
                <img className="rounded-xl" src={img} alt="" />
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="font-semibold text-[#FF3811]">Price: ${price}</p>
                <div className="text-center">
                    <Link to={`/checkout/${_id}`}><button className=" btn bg-[#FF3811] text-white hover:text-black my-5 w-2/3">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
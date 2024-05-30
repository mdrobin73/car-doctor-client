import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#FF3811]">Service</h2>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mb-10">
                {
                    services.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)
                }
            </div>
            <div className="text-center mb-20">
                <button className="btn bg-white text-[#FF3811] border-[#FF3811]">More Services</button>
            </div>
        </div>
    );
};

export default Services;
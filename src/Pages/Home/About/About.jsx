import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="hero my-16">
            <div className="flex flex-col lg:flex-row ">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="rounded-lg w-3/4" />
                    <img src={parts} className="rounded-lg  border-8 border-white shadow-xl absolute w-1/2 right-20 top-40" />
                </div>
                <div className="lg:w-1/2 space-y-3">
                    <h2 className="text-2xl font-semibold text-[#FF3811]">About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <Link to={"/discoverMore"}><button className="btn text-white bg-[#FF3811]">Get More Info</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;
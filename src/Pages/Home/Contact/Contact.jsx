import icon1 from "../../../assets/icons/Group 32.png"
import icon2 from "../../../assets/icons/Group 34.png"
import icon3 from "../../../assets/icons/Group 35.png"

const Contact = () => {
    return (
        <div className="bg-[#151515] lg:flex justify-evenly py-20 rounded-xl mb-20">
            <div className="flex items-center">
                <img src={icon1} alt="" />
                <div className="text-white ml-5">
                    <p className="">We are open monday-friday</p>
                    <h2 className="text-2xl font-semibold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className="flex items-center">
                <img src={icon2} alt="" />
                <div className="text-white ml-5">
                    <p className="">We are open monday-friday</p>
                    <h2 className="text-2xl font-semibold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className="flex items-center">
                <img src={icon3} alt="" />
                <div className="text-white ml-5">
                    <p className="">We are open monday-friday</p>
                    <h2 className="text-2xl font-semibold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;
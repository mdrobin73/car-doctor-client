import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;
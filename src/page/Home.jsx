import Banner from "../Components/Banner/Banner";
import Skills from "../Components/Skills/Skills";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials ";

const Home = () => {
    return (
        <div>
            
            <Banner/>
       
            <About/>
            <Skills/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            
        </div>
    );
};

export default Home;
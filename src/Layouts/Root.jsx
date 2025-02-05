import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
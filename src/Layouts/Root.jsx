import { Outlet } from "react-router";


const Root = () => {
    return (
        <div>
            Header
            <Outlet/>

            Footer
        </div>
    );
};

export default Root;
// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Pages/Footer";

const Main = () => {
    return (
        <div className="container m-auto p-3">
            <Navbar></Navbar>
            <div className="min-h-[calc(100\vh-250px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
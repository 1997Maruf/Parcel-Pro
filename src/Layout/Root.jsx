import { Outlet } from "react-router-dom";
import NaveBar from "../ShareComponent/NavBar/NaveBar";
import Footer from "../ShareComponent/Footer/Footer";

const Root = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
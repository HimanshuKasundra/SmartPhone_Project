import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
function Layout()
{
    return(
        <>
            <Header/>
            
            <Outlet/>
            <Footer/>        
        </>
    )
}

export default Layout;
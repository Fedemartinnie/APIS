import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../componentes/AppBar";
import SignIn from '../componentes/AppBar';
import { AppBar } from "@mui/material";


const Layout = () =>{
    return <div>
        <ResponsiveAppBar>    
        </ResponsiveAppBar>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;
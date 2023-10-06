import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../componentes/AppBar";

const Layout = () =>{
    
    return <div>
        <ResponsiveAppBar>    
        </ResponsiveAppBar>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;
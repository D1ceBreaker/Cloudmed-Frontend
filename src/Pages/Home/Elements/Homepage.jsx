import React from 'react';
import Header from "./Header";

import MainLine from "./MainLine";
import {CssBaseline} from "@mui/material";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <div>
            <CssBaseline />
            <Header/>
            <MainLine/>
            <Footer/>
        </div>
    );
};

export default Homepage;
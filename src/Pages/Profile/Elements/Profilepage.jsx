import React from 'react';
import {CssBaseline} from "@mui/material";
import Header from "../../Home/Elements/Header";
import Layout from "./Layout";
import Footer from "../../Home/Elements/Footer";

const Profilepage = () => {
    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Layout/>
            <Footer/>
        </div>
    );
};

export default Profilepage;
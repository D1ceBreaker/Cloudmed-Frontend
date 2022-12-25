import React from 'react';
import Header from "../../Home/Elements/Header";
import MainLine from "../../Home/Elements/MainLine";
import {CssBaseline, Grid} from "@mui/material";
import RegisrBox from "./RegisrBox";



const Registrationpage = () => {
    return (
        <div>
            <CssBaseline />
            <Header/>
            <RegisrBox/>
        </div>
    );
};

export default Registrationpage;
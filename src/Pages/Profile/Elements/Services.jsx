import React from 'react';
import {Box} from "@mui/material";
import AudioService from "./AudioService";

const Services = () => {
    return (
        <Box
            sx={{
                my: 8,
                mx: 8,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <AudioService/>
        </Box>
    );
};

export default Services;
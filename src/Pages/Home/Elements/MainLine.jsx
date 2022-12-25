import React from 'react';
import {
    Box,
    Button,
    CssBaseline,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import pic from '../Images/0u42qlr456zqi1t0m2dtj2mv4iut8ugp.png'
import FeatureList from "./FeatureList";

const MainLine = () => {
    return (
        <Grid container component="main" sx={{ height: '35vh', marginTop: "5vh", }}>
            <CssBaseline />

            <Grid item xs={12} sm={4} md={4} component={Paper} elevation={12} square bgcolor='primary.dark'>
                <Box
                    sx={{
                        my: 8,
                        mx: 8,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h2" variant="h2" color='#FFFFFF'>
                        Облачный <br/> медицинский <br/> сервис
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={false} sm={4} md={4} component={Paper} elevation={6} square bgcolor='primary.main'>
                <Box
                    sx={{
                        my: 8,
                        mx: 8,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <FeatureList/>
                </Box>
            </Grid>

            <Grid item xs={false} sm={4} md={4} sx={{
                backgroundImage: `url(${pic})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />

            <Grid item xs={12} component={Paper} elevation={12} square bgcolor='primary.main' sx={{textAlign: 'center',}}>
                <Button variant="contained" size="large" color="primary" disableElevation>Больше о нас</Button>

            </Grid>
        </Grid>
    );
};

export default MainLine;
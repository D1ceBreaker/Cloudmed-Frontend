import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';


const Footer = () => {
    return (
        <Box>
            <AppBar position='fixed' sx={{top: 'auto', bottom: 0, height: '10vh',
                marginTop: '50px'}}>
                <Toolbar>
                    <CloudIcon/>
                    <Typography variant="h5" component="div" sx={{flexGrow: 2}}>
                        CloudMed
                    </Typography>
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        Время работа поддержки:<br />
                        по будням с 11:50 до 12:45
                    </Typography>
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        Адрес главного офиса:<br />
                        115409, Москва, Каширское ш, 31
                    </Typography>
                    <Typography variant="body1" component="div" sx={{flexGrow: 1}}>
                        +7 (903) 627-29-29
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;
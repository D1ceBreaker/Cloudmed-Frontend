import React, {useContext, useState} from 'react';
import {
    Box,
    CssBaseline, Divider,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    Paper,
    Typography
} from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AudioService from "./AudioService";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Context/Context";
const Layout = () => {
    const [selectedIndex, setIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setIndex(index);
    };
    let Element;
    if (selectedIndex === 1){
        Element = <AudioService/>
    }
    else {
        Element = <Typography>В разработке</Typography>
    }
    const {isAuth, setAuth} = useContext(AuthContext);


    return (
        <Grid container component="main" sx={{ height: '95vh', marginTop: "0vh", }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={2} component={Paper} elevation={10} square bgcolor='primary.dark'>
                <Box
                    sx={{
                        my: 1,
                        mx: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <List sx={{ width: '100%'}}
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                    >

                        <ListItemButton sx={{marginY: 2}}
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <AccountBoxIcon sx={{color: '#FFFFFF'}} />
                            </ListItemIcon>
                            <Typography color='#FFFFFF' variant='h5'>Профиль</Typography>
                        </ListItemButton>

                        <Divider orientation="horizontal" flexItem color='#FFFFFF' />

                        <ListItemButton sx={{marginY: 2}}
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemIcon>
                                <LocalHospitalIcon sx={{color: '#FFFFFF'}} />
                            </ListItemIcon>
                            <Typography color='#FFFFFF' variant='h5'>Услуги</Typography>
                        </ListItemButton>

                        <Divider orientation="horizontal" flexItem color='#FFFFFF' />

                        <ListItemButton sx={{marginY: 2}}
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemIcon>
                                <SettingsIcon sx={{color: '#FFFFFF'}} />
                            </ListItemIcon>
                            <Typography color='#FFFFFF' variant='h5'>Настройки</Typography>
                        </ListItemButton>

                    </List>

                </Box>
            </Grid>


            <Grid item xs={12} sm={8} md={10} component={Paper} elevation={0} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 8,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {Element}

                </Box>
            </Grid>


        </Grid>
    );
};

export default Layout;
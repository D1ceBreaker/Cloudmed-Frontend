import React, {useContext} from 'react';
import {AppBar, Box, Button, Divider, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";
import LoginBox from "./LoginBox";
import {AuthContext} from "../../../Context/Context";


const Header = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    let element;
    /*if (isAuth){
        element = <Button variant="outlined" color='inherit' size="large"
                          endIcon={<AccountCircleIcon
                              fontSize="large"
                              color="inherit"/>}
                          component={Link} to='/profile'
        >
            Личный кабинет
        </Button>
    }
    else{
        element = <LoginBox/>
    }*/
    element = <Button variant="outlined" color='inherit' size="large"
                      endIcon={<AccountCircleIcon
                          fontSize="large"
                          color="inherit"/>}
                      component={Link} to='/profile'
    >
        Личный кабинет
    </Button>
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        fontSize="large"
                        edge="start"
                        color="inherit"
                        component={Link} to='/'
                        sx={{ mr: 2 }}
                    >
                        <CloudQueueIcon />
                    </IconButton>

                    <Typography variant="h4" component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none', }} color='inherit'>
                        CloudMed
                    </Typography>


                    <Stack direction='row-reverse'
                           divider={<Divider orientation="vertical" flexItem color='#FFFFFF' />}
                           spacing={4}>


                        {element}

                        <Button variant="outlined" color='inherit' size="large"
                                endIcon={<InfoIcon
                                        fontSize="large"
                                        color="inherit"/>}
                        >
                            О нас
                        </Button>
                    </Stack>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
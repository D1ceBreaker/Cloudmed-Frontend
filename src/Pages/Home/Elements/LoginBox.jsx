import React, {useContext, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Dialog,
    DialogContent, Grid,
    TextField,
    Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {AuthContext} from "../../../Context/Context";


const LoginBox = () => {
    const {isAuth, setAuth} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleDialog = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleUpload = () => {
        console.log(email, password);
        setAuth(true);
        //axios ......
    }



    return (
        <div>
            <Button variant="outlined" color='inherit' size="large"
                    onClick={handleDialog}
                    endIcon={<AccountCircleIcon
                        fontSize="large"
                        color="inherit"/>}
            >
                Войти
            </Button>

            <Dialog open={open}
            onClose={handleClose}>
                <DialogContent>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />


                        <Box
                            sx={{
                                marginTop: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Войти
                            </Typography>

                            <Box component="form"  noValidate sx={{ mt: 6 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Почта"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={event => setEmail(event.target.value)}
                                    value={email}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={event => setPassword(event.target.value)}
                                    value={password}
                                />


                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleUpload}
                                    disabled={(password === '')&&(email === '')}
                                >
                                    Войти
                                </Button>

                                <Grid container>
                                    <Grid item xs>
                                        <Button variant='outlined' component={Link} to="#" >Забыли пароль? </Button>

                                    </Grid>
                                    <Grid item>
                                        <Grid item xs>
                                            <Button variant='outlined' component={Link} to="/reg" >Создать аккаунт </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Box>

                        </Box>

                    </Container>
                </DialogContent>

            </Dialog>
        </div>



    );
};

export default LoginBox;
import React, {useState} from 'react';
import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {Link} from "react-router-dom";

const RegisrBox = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUpload = () => {
        console.log(email, password);
        //axios ......
    }
    return (
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
                <Typography component="h1" variant="h5">
                    Создать аккаунт
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
                        Зарегестрироваться
                    </Button>



                </Box>

            </Box>

        </Container>
    );
};

export default RegisrBox;
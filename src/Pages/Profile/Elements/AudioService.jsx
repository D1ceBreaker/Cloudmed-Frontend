import React, {useState} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import audio from '../Images/123-1238250_black-censor-bar-png-png-download-dsound-audio.png'
import FileButton from "./FileButton";
const AudioService = () => {
    const [clicked, setShow] = useState(false);
    const handleClick = () => {
        setShow(!clicked);
    };
    return (
        <Card elevation={7}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    image={audio}
                    alt="sound-wave"
                    sx={{objectFit: 'contain', height:'25vh', width:'25vw', alignItems: 'center'}}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Анализ гортани по голосу
                    </Typography>

                    <Typography color="text.secondary" variant='body2'>
                        *ogg *wav
                    </Typography>

                    <Typography variant="body1">
                        Алгоритм, показывающий параметры голоса с записи
                    </Typography>
                </CardContent>

            </CardActionArea>
            {clicked && <CardActions>

                <FileButton/>
            </CardActions>}


        </Card>
    );
};

export default AudioService;
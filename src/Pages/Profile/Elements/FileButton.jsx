import React, {useEffect, useState} from 'react';
import {Box, Button, Divider, Grid, Stack, Typography} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const FileButton = () => {
    const hostURL = "http://localhost:7000/files/upload";

    let data = {}
    const[sh, setsh] = useState(0)
    const[jm, setjm] = useState(0)
    const[f, setf] = useState(0)
    const[rap, setrap] = useState(0)

    const [uploaded, setUploaded] = useState();
    const [show, setButton] = useState(true);
    const [selectedFile, setSelectedFile] = useState({name: 'Выберете файл'});
    const [cross, setVisibility] = useState('none');
    const [displayRes, setRes] = useState(false);
    useEffect(() => {}, [uploaded])

    const handleChange = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
        setButton(event.target.files == null);
        setVisibility('flex');
    };

    const handleDelete = () => {
        setSelectedFile({name: 'Выберете файл'})
        setButton(true);
        setVisibility('none');
    };

    const handleUpload = async () => {
        setRes(true)
        const formData = new FormData();
        formData.append('file', selectedFile);
        setsh(Math.random() / 2)
        setjm(Math.random() / 2)
        setf(Math.random() * 70  +100)
        setrap(Math.random() / 2)
    };

    return (
        <Box sx={{width: 'inherit'}}>
            <Stack direction="row" spacing={1} sx={{marginTop: '25px'}}>
                <Button size="small"
                        component="label"
                        variant='outlined'
                        endIcon={<CloudDownloadIcon/>}
                >{selectedFile.name}
                    <input type="file" hidden accept=".wav" onChange={handleChange}/>
                </Button>


                <IconButton aria-label='delete'
                            disabled={true}//show
                            sx={{display: 'none'}}//cross
                            onClick={handleDelete}
                >
                    <ClearIcon/>
                </IconButton>

                <Button
                    component="label"
                    disabled={show}
                    variant='contained'
                    onClick={handleUpload}
                >

                    Отправить
                </Button>

            </Stack>
            {!show && displayRes && <Stack direction="column"
                                  justifyContent="center"
                                  sx={{marginTop: 3}}
                                  spacing={1}>
                <Typography variant="subtitle1"> localShimmer</Typography>
                <Typography variant='body1'> {sh}</Typography>
                <Divider/>
                <Typography variant="subtitle1"> localJitter</Typography>
                <Typography variant='body1'>{jm} </Typography>
                <Divider/>
                <Typography variant="subtitle1"> rapJitter</Typography>
                <Typography variant='body1'> {rap}</Typography>
                <Divider/>
                <Typography variant="subtitle1"> F0</Typography>
                <Typography variant='body1'> {f}</Typography>
            </Stack>}

        </Box>



    );
};

export default FileButton;
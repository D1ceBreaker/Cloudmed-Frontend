import React from 'react';
import {Box, Divider, List, ListItem, ListItemButton, Typography} from "@mui/material";
import CloudDoneIcon from '@mui/icons-material/CloudDone';
const FeatureList = () => {
    const ColorIcon = "#FFFFFF"
    return (
        <List>
            <ListItem >
                <CloudDoneIcon sx={{color: ColorIcon}}/>
                <ListItemButton>
                    <Typography color='#FFFFFF' variant='h5'>Только современное и качественное оборудование</Typography>
                </ListItemButton>

            </ListItem>

            <Divider />
            <ListItem >
                <CloudDoneIcon sx={{color: ColorIcon}}/>
                <ListItemButton>
                    <Typography color='#FFFFFF' variant='h5'>Круглосуточная поддержка</Typography>
                </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem >
                <CloudDoneIcon sx={{color: ColorIcon}}/>
                <ListItemButton >
                    <Typography color='#FFFFFF' variant='h5'>Технологии AI</Typography>
                </ListItemButton>
                </ListItem>
        </List>
    );
};

export default FeatureList;
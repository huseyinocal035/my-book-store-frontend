import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "white"
    }
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <Box sx={{flexGrow: 2}}>
            <AppBar position="static" sx={{ bgcolor: "#393937" }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" marginRight={5}>
                        <Link className={classes.link} to={"home"}>HOME</Link>
                    </Typography>
                    <Typography variant="h6" >
                        <Link className={classes.link} to={"books"}>BOOK STORE</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

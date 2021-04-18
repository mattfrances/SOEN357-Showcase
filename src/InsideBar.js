
import React, {useContext}  from "react";
import {
  useHistory,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {UserContext} from "./contexts/userContext"

import firebase from "firebase"
// import { sendPushNotification } from "./helpers/


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer'
    },
    stuff : {
      fontSize : '1.3em',
    }
  }));



const InsideBar = () => {
    const history = useHistory()
    const classes = useStyles();
    const { userState, userDispatch } = useContext(UserContext);

    
  const signOut = () => {
    firebase.auth().signOut();
    userDispatch({
      type: "userId",
      payload: null
    });
  };
    return (
            <AppBar position="static">
                <Toolbar>
                <Typography  onClick={() => history.push('/dashboard')} variant="h6" className={classes.title}>
                    Showcase
                </Typography>
                {userState.userId && 
                <>
                <Button onClick={() => history.push('/profile')} className={classes.stuff} color="inherit">Profile</Button>
                <Button onClick={() => history.push('/search')} className={classes.stuff} color="inherit">Search</Button>
                <Button onClick={() => signOut()} className={classes.stuff}color="inherit">Logout</Button>
                </>
                }
                </Toolbar>
        </AppBar>
    )
}

export default InsideBar

        // <AppBar position="static">
        // <Toolbar>
        //   <Typography variant="h6" className={classes.title}>
        //     Showcase
        //   </Typography>
        //   <Button onClick={() => history.push('/profile')} className={classes.stuff} color="inherit">Profile</Button>
        //   <Button onClick={() => history.push('/search')} className={classes.stuff} color="inherit">Search</Button>
        //   <Button  className={classes.stuff}color="inherit">Logout</Button>
        // </Toolbar>
        // </AppBar>
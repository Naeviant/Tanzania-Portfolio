import React from 'react';
import {
  AppBar,
  Toolbar,
  Button, Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  logoImg: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  rightToolbar: {
    position: 'absolute !important' as any,
    right: 0,
  }
});

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <img src="/images/logo.png" alt="Camp Tanzania" className={classes.logoImg} />
        <Typography variant="h5">My Tanzania Portfolio</Typography>
      </Toolbar>
      <Toolbar variant="dense" className={classes.rightToolbar}>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/diary">
          <Button>Diary</Button>
        </Link>
        <Link to="/gallery">
          <Button>Gallery</Button>
        </Link>
        <Link to="/fundraising">
          <Button>Fundraising</Button>
        </Link>
        <Link to="/sponsors">
          <Button>Sponsors</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

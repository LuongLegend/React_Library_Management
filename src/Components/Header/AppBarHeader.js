import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import CatagoryComboBox from './CatagoryComboBox'
import AccountIcon from './AccountIcon'
import SearchBar from './SearchBar'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Login from '../Login/Login'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function AppBarHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar >     
          <Typography variant="h6">
                <CatagoryComboBox width = "200px"/>
          </Typography>
          <Typography variant="h6" align = "left"  >
                <SearchBar />
          </Typography>
          <Typography variant="h6" className={classes.title} align="right">
                <AccountIcon />
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

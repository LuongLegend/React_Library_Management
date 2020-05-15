import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch'
      },
    },
  }));
function UsernameText(props) {
    const classes = useStyles();
    const {username , onHandleUsernameChange} = props;
    const handleUsernameChange = e => {
        onHandleUsernameChange(e.target.value)
    }
    return (
        <div className={classes.root } noValidate autoComplete="off">
            <TextField
                id="outlined-username-input"
                label= "Tài khoản"   
               // autoComplete="current-password"
                variant="outlined"
                value = {username}
                onChange={handleUsernameChange}
            />
        </div>
    )
}

export default UsernameText

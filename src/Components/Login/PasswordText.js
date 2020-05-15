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
function PasswordText(props) {
    const classes = useStyles();
    const {password, onHandlePasswordChange} = props;
    const handlePasswordChange = e => {
        onHandlePasswordChange(e.target.value)
    }
    return (
        <div className={classes.root } noValidate autoComplete="off">
            <TextField
                id="outlined-password-input"
                label= "Mật khẩu"
                type= "password"
                autoComplete="current-password"
                variant="outlined"
                value = {password}
                onChange={handlePasswordChange}
            />
        </div>
    )
}

export default PasswordText

import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));

function LoginButton(props) {
  const classes = useStyles();
  const { username, password } = props;
  const [open, setOpen] = useState(false); //open alert

  let history = useHistory();
  const handleClick = () => {
    const getData = async () => {
      let { data } = await axios.post('http://localhost:3333/login', { username, password });
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('username', username);
        history.push("/");
      }
      else setOpen(true);
    };
    
    getData()
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Đăng nhập
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" elevation={6} variant="filled" {...props}>
          Sai Tên tài khoản hoặc mật khẩu
        </Alert>
      </Snackbar>
    </div>
  )
}

export default LoginButton

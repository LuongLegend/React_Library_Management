import React, { useState } from 'react'
import { TextField, Button, Snackbar } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { Alert } from '@material-ui/lab'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // margin: theme.spacing(1),
            margin: '100px auto',
            width: '50ch',
        },
    },
    username: {
        margin: theme.spacing(1),
        width: '40ch'
    },
    button: {
        margin: theme.spacing(1)
    }
}));
function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
        <div className={classes.root} noValidate autoComplete="off" >
            <form>
                <h1>Đăng nhập</h1>
                <TextField
                    id="outlined-username-input"
                    label="Tài khoản"
                    // autoComplete="current-password"
                    variant="outlined"
                    className={classes.username}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    className={classes.username}
                    label="Mật khẩu"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
                    Đăng nhập
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" elevation={6} variant="filled" >
                        Sai Tên tài khoản hoặc mật khẩu
                    </Alert>
                </Snackbar>
            </form>
        </div>
    )
}

export default Login

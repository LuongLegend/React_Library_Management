import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom'
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function AccountIcon() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLogin, setIsLogin] = React.useState(true);
    let history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (!localStorage.username) {
            history.push("/login");
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AccountCircleIcon
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
                fontSize="large"
            />
            {
            isLogin &&
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={localStorage.getItem('username')} />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Quản trị" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Đã lưu" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Đăng xuất" onClick={() => { localStorage.clear(); setIsLogin(false);}} />
                </StyledMenuItem>
            </StyledMenu>
            }
        </div>
    );
}

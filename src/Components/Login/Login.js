import React, { useState } from 'react'
import LoginButton from './LoginButton'
import PasswordText from './PasswordText'
import UsernameText from './UsernameText'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (username) =>{
        setUsername(username)
    }

    const handlePasswordChange = (password) =>{
        setPassword(password)
    }
    return (
        <div>
            <h1>Đăng nhập</h1>
            <UsernameText 
                username={username} 
                onHandleUsernameChange={handleUsernameChange} 
            />
            <PasswordText 
                password={password} 
                onHandlePasswordChange={handlePasswordChange} 
            />
            <LoginButton 
                username={username}
                password={password}
            />
        </div>
    )
}

export default Login

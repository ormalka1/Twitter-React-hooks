import React, { useState } from 'react';
import '../style/Login.css';
import { useHistory } from 'react-router-dom';
import Logo from '../common/Logo';
import TweetBtn from '../common/TweetBtn';


function Register() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRegister() {
        try {
            history.push('/Home');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login-page">
            <form className="login-form">
                <div className="login-header">
                    <Logo />
                    <h2 className="header">Create your account</h2>
                </div>
                <input className="login-input"
                    placeholder="Name"
                    type="text"
                    onChange={handleNameChange}
                />
                <input className="login-input"
                    placeholder="Email"
                    type="text"
                    onChange={handleEmailChange}
                />
                <input className="login-input"
                    placeholder="Phone"
                    type="text"
                    onChange={handlePhoneChange}
                />
                <input className="login-input"
                    placeholder="Password"
                    type="password"
                    onChange={handlePasswordChange}
                />

                <TweetBtn content="Create" size="x-large-btn" onClick={handleRegister} />
                <p className="message">Already Registered? <a href="/Login">Log In</a> </p>
            </form>
        </div>
    );
}



export default Register;

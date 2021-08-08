import React, { useState } from 'react';
import '../style/Login.css';
import { useHistory } from 'react-router-dom';
import Logo from '../common/Logo';
import TweetBtn from '../common/TweetBtn';
import { login } from '../actions/actions'
import { connect } from 'react-redux';


function Login(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleLogin() {
        try {
            history.push('/Home');
            props.onLogin();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login-page">
            <form className="login-form">
                <div className="login-header">
                    <Logo />
                    <h2 className="header"> Log in to Twitter</h2>
                </div>
                <input className="login-input"
                    placeholder="Phone, email, or username"
                    type="text"
                    onChange={handleNameChange}
                />
                <input className="login-input"
                    placeholder="Password"
                    type="password"
                    onChange={handlePasswordChange}
                />

                <TweetBtn content="Log in" size="x-large-btn" onClick={handleLogin} />
                <p className="message">Not Registered? <a href="/Register">Register</a> </p>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state.user);
    return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch(login)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function LogInView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Set the values of username and password
    function handleChange(event) {
        let { name, value } = event.target;
        switch (name) {
            case 'usernameInput':
                setUsername(value);
                break;
            case 'passwordInput':
                setPassword(value);
                break;
            default:
                break;
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.loginCb(username, password);
    }

    return (
            <form className="login-form" onSubmit={handleSubmit}>

                <h3>Log in</h3>

                {
                    props.loginError && (
                        <div className="alert alert-danger">{props.loginError}</div>
                    )
                }

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="usernameInput" required className="form-control" value={username} onChange={handleChange} placeholder="Enter username" />
                    

                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <NavLink to="#">password?</NavLink>
                </p>
            </form>
        );
    }
    
export default LogInView;

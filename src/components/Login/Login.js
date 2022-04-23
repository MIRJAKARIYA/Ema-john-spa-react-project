import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    

    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }

    if(user){
        navigate(from, {replace: true});
    }

    const handleUserSignIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>This is login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required/>
                    </div>
                    <p style={{color: 'red'}}>{error && error.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value='Login' />
                </form>
                <p>New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link></p>
                <div style={{display: 'flex',alignItems: 'center',justifyContent:'space-between'}}>
                    <div style={{border:'1px solid black',width:"190px"}}></div>
                    <p>or</p>
                    <div style={{border:'1px solid black',width:"190px"}}></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
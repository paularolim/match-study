import React from 'react';

import './Login.css';

import Navbar from './Navbar';

function Login(props) {
    return (
        <div className="Login">
            <Navbar />
            <main className="login-main">
                <h2 className="login-title">Login</h2>
                <form className="login-form">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-input" />

                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        name=""
                        id=""
                        className="form-input"
                    />

                    <input
                        type="submit"
                        value="Login"
                        className="form-button"
                    />
                </form>
                <div className="login-links">
                    <a href="#">Esqueci minha senha</a>
                    <p>
                        Ainda não possui conta?
                        <a href="#">Cadastre-se</a>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Login;

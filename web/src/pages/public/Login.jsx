import React from 'react';

import api from '../../services/api';
import { login } from '../../services/auth';

import './Login.css';

import Navbar from './Navbar';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
    };

    handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: 'Preencha e-mail e senha para continuar!' });
        } else {
            try {
                const response = await api.post('/login', {
                    email,
                    password,
                });
                login(response.data.token);
                this.props.history.push('/app');
            } catch (err) {
                this.setState({
                    error:
                        'Houve um problema com o login',
                });
            }
        }
    };

    render() {
        return (
            <div className="Login">
                <Navbar />
                <main className="login-main">
                    <h2 className="login-title">Login</h2>
                    <div className="info">{this.state.error}</div>
                    <form className="login-form">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            className="form-input"
                            name="email"
                            onChange={(e) =>
                                this.setState({ email: e.target.value })
                            }
                        />

                        <label htmlFor="">Senha</label>
                        <input
                            type="password"
                            name="password"
                            id=""
                            className="form-input"
                            onChange={(e) =>
                                this.setState({ password: e.target.value })
                            }
                        />

                        <input
                            type="submit"
                            value="Login"
                            className="form-button"
                            onClick={this.handleSignIn}
                        />
                    </form>
                    <div className="login-links">
                        <a href="/">Esqueci minha senha</a>
                        <p>
                            Ainda não possui conta?
                            <a href="/">Cadastre-se</a>
                        </p>
                    </div>
                </main>
            </div>
        );
    }
}

export default Login;

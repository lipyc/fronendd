import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from './authService'; // Importando o AuthService


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await AuthService.login(email, password);
            if (data.token) {
                // Armazenar o token JWT no localStorage
                localStorage.setItem('token', data.token);
                // Redirecionar para a página inicial
                navigate('/');
            } else {
                setError("Credenciais inválidas. Por favor, verifique seus dados." + error);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("Erro ao fazer login. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="container login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/reset-password" className="forgot-password-link">Esqueceste-te da palavra passe?</Link>
            </form>
        </div>
    );
}

export default LoginPage;
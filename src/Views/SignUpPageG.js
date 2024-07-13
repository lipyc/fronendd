import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import authServiceInstance from './authService';

function SignUpPageG() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [supervisorId, setSupervisorId] = useState(null);

    useEffect(() => {
        const currentUser = authServiceInstance.getCurrentUser();
        if (currentUser) {
            setSupervisorId(currentUser.id);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (password !== confirmPassword) {
            setErrorMessage('As palavras-passe não coincidem!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/user/create', {
                nome: name,
                email: email,
                password: password,
                id_tipo: 3,  // Altere aqui para corresponder ao backend
                id_supervisor: supervisorId // Inclua o ID do supervisor
            });

            if (response.data.success) {
                navigate('/login');
            } else {
                setErrorMessage(response.data.message || 'Erro ao registrar');
            }
        } catch (error) {
            console.error('Erro:', error);
            setErrorMessage('Erro ao conectar ao servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="container signup-container">
            <h2>Criar Conta</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Criar Conta</button>
                <p className="login-link">
                    Já tem uma conta? <Link to="/login">Faça login</Link>
                </p>
            </form>
        </div>
    );
}

export default SignUpPageG;

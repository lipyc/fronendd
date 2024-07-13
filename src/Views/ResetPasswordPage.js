import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            setShowModal(true);
        } else {
            alert('As palavras-passe não coincidem!');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/login');
    };

    return (
        <div className="reset-password-container">
            <div className="reset-password-box">
                <h2>Redefinir Palavra-passe</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="newPassword">Nova Palavra-passe:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Palavra-passe:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>Nova palavra-passe adicionada com sucesso!</p>
                            <button onClick={handleCloseModal} className="btn btn-primary">Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResetPasswordPage;

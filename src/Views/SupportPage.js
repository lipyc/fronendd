import React from 'react';

function SupportPage() {
    return (
        <div className="container mt-4">
            <div className="jumbotron">
                <h1 className="display-4">Suporte</h1>
                <p className="lead">Bem-vindo à página de suporte da Adobe. Estamos aqui para ajudar você com qualquer problema que possa ter com nossos produtos.</p>
                <hr className="my-4" />
                <p>Escolha uma das opções abaixo para encontrar a ajuda que precisa:</p>
                <ul>
                    <li><a href="#faq">Perguntas Frequentes (FAQ)</a></li>
                    <li><a href="#contact-support">Contato com o Suporte</a></li>
                    <li><a href="#troubleshooting">Resolução de Problemas</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SupportPage;

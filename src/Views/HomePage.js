import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="home-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="intro">
                            <h1>Bem-vindo à Adobe</h1>
                            <p>
                                Descubra as soluções poderosas que temos para oferecer e leve sua empresa para o próximo nível.
                            </p>
                            <Link to="/products" className="btn btn-primary">Veja os nossos produtos</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="placeholder-image.jpg" alt="Placeholder" className="intro-image" />
                    </div>
                </div>
            </div>
            <div className="cta">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src="placeholder-image-2.jpg" alt="Placeholder 2" className="cta-image" />
                        </div>
                        <div className="col-md-6">
                            <div className="cta-content">
                                <h2>Adquira o nosso VPN</h2>
                                <p>
                                    Proteja seus dados e mantenha sua privacidade online com nosso serviço VPN confiável.
                                </p>
                                <Link to="/products" className="btn btn-primary">Adquira agora</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

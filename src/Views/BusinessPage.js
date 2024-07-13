import React from 'react';

function BusinessPage() {
    return (
        <div className="container mt-4">
            <div className="jumbotron">
                <h1 className="display-4">Soluções para Empresas</h1>
                <p className="lead">Proteção completa e segura para todos os aspectos do seu negócio.</p>
                <hr className="my-4" />
                <p>Explore nossas soluções de segurança e descubra como podemos ajudar a proteger sua empresa.</p>
                <a className="btn btn-primary btn-lg" href="#learn-more" role="button">Saiba mais</a>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Segurança de Rede</h2>
                    <p>Proteja sua rede contra ameaças com nossa solução abrangente de segurança de rede.</p>
                </div>
                <div className="col-md-4">
                    <h2>Proteção de Endpoint</h2>
                    <p>Mantenha seus dispositivos seguros com nossa proteção avançada de endpoint.</p>
                </div>
                <div className="col-md-4">
                    <h2>Serviços de Consultoria</h2>
                    <p>Nossa equipe de especialistas está pronta para ajudar com suas necessidades de segurança.</p>
                </div>
            </div>
        </div>
    );
}

export default BusinessPage;

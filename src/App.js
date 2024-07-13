import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ProductList from './Views/ProductList';
import BusinessPage from './Views/BusinessPage';
import SupportPage from './Views/SupportPage';
import HomePage from './Views/HomePage';
import ClientsPage from './Views/ClientsPage';
import SalesPage from './Views/SalesPage';
import LoginPage from './Views/LoginPage';
import ResetPasswordPage from './Views/ResetPasswordPage';
import SignUpPage from './Views/SignUpPage';
import ProfilePage from './Views/ProfilePage';
import SignUpPageG from './Views/SignUpPageG'; 
import EditProductComponent from './Views/EditProductComponent';
import CreateProductComponent from './Views/CreateProduct'; 
import './App.css';

// Importe a imagem do seu logo
import logo from './imagens/logo.png';

function App() {
    const [headerTitle, setHeaderTitle] = useState('Produtos Adobe');

    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/products':
                setHeaderTitle('Produtos');
                break;
            case '/business':
                setHeaderTitle('Empresa');
                break;
            case '/support':
                setHeaderTitle('Suporte');
                break;
            case '/clients':
                setHeaderTitle('Clientes');
                break;
            case '/sales':
                setHeaderTitle('Vendas');
                break;
            case '/login':
                setHeaderTitle('Login');
                break;
            case '/reset-password':
                setHeaderTitle('Redefinir Senha');
                break;
            case '/signup':
                setHeaderTitle('Criar Conta');
                break;
            case '/profile':
                setHeaderTitle('Perfil');
                break;
            case '/signup-g':
                setHeaderTitle('Criar Gestor');
                break;
            case '/edit-product/:id':
                setHeaderTitle('Editar Produto');
                break;
            case '/create-product':
                setHeaderTitle('Criar Produto'); // Define o título para a página de criação de produtos
                break;
            default:
                setHeaderTitle('Unilogic');
                break;
        }
    }, [location.pathname]);

    return (
        <div id="root">
            <header className="bg-dark text-white py-3 header">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
                <div className="header-content">
                    <h1>{headerTitle}</h1>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#contact">Pacotes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Empresa</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/support">Suporte</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/clients">Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sales">Vendas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Criar Conta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup-g">Criar Gestor</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {location.pathname === '/products' && (
                <div className="banner">
                    <img src="banner.jpg" alt="Banner" className="banner-image" />
                </div>
            )}
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/business" element={<BusinessPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/sales" element={<SalesPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/signup-g" element={<SignUpPageG />} />
                    <Route path="/edit-product/:id" element={<EditProductComponent />} />
                    <Route path="/create-product" element={<CreateProductComponent />} /> {/* Adiciona a rota para a criação de produtos */}
                </Routes>
            </div>
            <footer className="bg-dark text-white text-center py-3 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="footer-links">
                                <li><Link to="#">Destaques</Link></li>
                                <li><Link to="#">Comprar</Link></li>
                                <li><Link to="#">Vender</Link></li>
                                <li><Link to="#">Perfil</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="footer-links">
                                <li><Link to="#">Empresa</Link></li>
                                <li><Link to="#">Sobre</Link></li>
                                <li><Link to="#">Termos de Utilização</Link></li>
                                <li><Link to="#">Política e Privacidade</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="social-icons">
                                <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                                <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <p>&copy; 2024 Projeto de trabalho - UniLogic</p>
                </div>
            </footer>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
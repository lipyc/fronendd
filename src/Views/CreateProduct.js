import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateProductPage() {
    const [id_tipo5, setIdTipo5] = useState('');
    const [id_pacotes, setIdPacotes] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [valorbase, setValorBase] = useState('');
    const [versao, setVersao] = useState('');
    const [tempo, setTempo] = useState('');
    const [desconto, setDesconto] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:3000/api/produto/create', {
                id_tipo5,
                id_pacotes,
                nome,
                descricao,
                imagem,
                valorbase,
                versao,
                tempo,
                desconto
            });

            console.log('Resposta do servidor:', response.data);

            if (response.data.success) {
                navigate('/products'); // Verifique se essa rota existe e está correta
            } else {
                setErrorMessage(response.data.message || 'Erro ao criar produto');
            }
        } catch (error) {
            console.error('Erro:', error);
            setErrorMessage('Erro ao conectar ao servidor. Tente novamente mais tarde.');
        }
    };

    const handleBackToList = () => {
        navigate('/products'); // Verifique se essa rota existe e está correta
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
            <div className="col-md-10">
                <div className="card p-4">
                    <h2 className="text-center mb-4">Criar Novo Produto</h2>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="id_tipo5">ID do Tipo</label>
                            <select
                                className="form-control"
                                id="id_tipo5"
                                value={id_tipo5}
                                onChange={(e) => setIdTipo5(e.target.value)}
                                required
                            >
                                <option value="">Selecione o Tipo</option>
                                <option value="1">Design</option>
                                <option value="2">Database</option>
                                <option value="3">Programação</option>
                                <option value="4">Contabilidade</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_pacotes">ID do Pacote</label>
                            <select
                                className="form-control"
                                id="id_pacotes"
                                value={id_pacotes}
                                onChange={(e) => setIdPacotes(e.target.value)}
                                required
                            >
                                <option value="">Selecione o Pacote</option>
                                <option value="1">Kit Designer</option>
                                <option value="2">Kit DataAnalyst</option>
                                <option value="3">Kit Programador</option>
                                <option value="4">Kit Contabilista</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagem">Imagem</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imagem"
                                value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="valorbase">Valor Base</label>
                            <input
                                type="text"
                                className="form-control"
                                id="valorbase"
                                value={valorbase}
                                onChange={(e) => setValorBase(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="versao">Versão</label>
                            <input
                                type="text"
                                className="form-control"
                                id="versao"
                                value={versao}
                                onChange={(e) => setVersao(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempo">Tempo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tempo"
                                value={tempo}
                                onChange={(e) => setTempo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desconto">Desconto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="desconto"
                                value={desconto}
                                onChange={(e) => setDesconto(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mr-2">Criar Produto</button>
                            <button type="button" className="btn btn-secondary" onClick={handleBackToList}>Voltar para Lista de Produtos</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProductPage;
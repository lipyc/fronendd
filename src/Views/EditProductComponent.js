import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProductComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [produto, setProduct] = useState({
        id_prod: '',
        id_tipo5: '',
        id_pacotes: '',
        nome: '',
        descricao: '',
        imagem: '',
        valorbase: '',
        versao: '',
        tempo: '',
        desconto: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/produto/get/${id}`);
                
                const data = response.data.data[0]; // Obtém o primeiro item do array de dados
                setProduct(data); // Preenche o estado 'produto' com os dados do produto
            } catch (error) {
                console.error('Erro ao buscar produto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/produto/update/${id}`, produto);
            if (response.data.success) {
                alert(response.data.message); // Exibe mensagem de sucesso
                navigate('/products'); // Redireciona para a lista de produtos após atualização
            } else {
                alert('Erro ao atualizar produto'); // Exibe mensagem de erro genérica
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            alert('Erro ao atualizar produto'); // Exibe mensagem de erro genérica
        }
    };

    return (
        <div className="container">
            <h2>Editar Produto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={produto.descricao}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="valorbase">Valor Base:</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="valorbase"
                        name="valorbase"
                        value={produto.valorbase}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_tipo5">ID do Tipo de Produto:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id_tipo5"
                        name="id_tipo5"
                        value={produto.id_tipo5}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_pacotes">ID do Pacote:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id_pacotes"
                        name="id_pacotes"
                        value={produto.id_pacotes}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imagem">Imagem:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imagem"
                        name="imagem"
                        value={produto.imagem}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="versao">Versão:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="versao"
                        name="versao"
                        value={produto.versao}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tempo">Tempo:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="tempo"
                        name="tempo"
                        value={produto.tempo}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desconto">Desconto:</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="desconto"
                        name="desconto"
                        value={produto.desconto}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-2">Salvar</button>
                <button className="btn btn-secondary" onClick={() => navigate('/products')}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default EditProductComponent;
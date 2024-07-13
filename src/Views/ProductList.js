import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Swal from 'sweetalert2';

export default function ListComponent() {
    const [dataProduto, setDataProduto] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('Todos');

    useEffect(() => {
        const url = 'http://localhost:3000/api/produto/list';
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    setDataProduto(res.data.data);
                    setFilteredData(res.data.data); // Initially show all products
                } else {
                    setError("Error Web Service!");
                }
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filterProducts = (category) => {
        setCategory(category);
        if (category === 'Todos') {
            setFilteredData(dataProduto);
        } else {
            const categoryMap = {
                'Design': 1,
                'Database': 2,
                'Programação': 3,
                'Contabilidade': 4
            };
            setFilteredData(dataProduto.filter(product => product.id_tipo5 === categoryMap[category]));
        }
    };

    const OnDelete = (id_prod) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                SendDelete(id_prod);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your product is safe :)',
                    'error'
                );
            }
        });
    };

    const SendDelete = (id_prod) => {
        const baseUrl = "http://localhost:3000/api/produto/delete";
        axios.delete(baseUrl, { data: { id_prod } })
            .then(response => {
                if (response.data.success) {
                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    );
                    const updatedData = dataProduto.filter(product => product.id_prod !== id_prod);
                    setDataProduto(updatedData);
                    filterProducts(category);
                } else {
                    Swal.fire(
                        'Error!',
                        response.data.message || 'Failed to delete product.',
                        'error'
                    );
                }
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    error.message || 'Failed to delete product.',
                    'error'
                );
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        <button className="list-group-item list-group-item-action" onClick={() => filterProducts('Todos')}>Todos</button>
                        <button className="list-group-item list-group-item-action" onClick={() => filterProducts('Design')}>Design</button>
                        <button className="list-group-item list-group-item-action" onClick={() => filterProducts('Database')}>Database</button>
                        <button className="list-group-item list-group-item-action" onClick={() => filterProducts('Programação')}>Programação</button>
                        <button className="list-group-item list-group-item-action" onClick={() => filterProducts('Contabilidade')}>Contabilidade</button>
                        <Link to="/create-product" className="btn btn-primary btn-block mt-3">Criar</Link> {/* Adiciona o link para a criação de produtos */}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {filteredData.map((data, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.nome}</h5>
                                        <p className="card-text">{data.descricao}</p>
                                        <p className="card-text"><small className="text-muted">{data.valorbase}</small></p>
                                        <p className="card-text"><small className="text-muted">{data.versao}</small></p>
                                        <p className="card-text"><small className="text-muted">{data.tempo}</small></p>
                                        <p className="card-text"><small className="text-muted">{data.desconto}</small></p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <Link className="btn btn-outline-info" to={"/edit-product/" + data.id_prod}>Edit</Link>
                                                <button className="btn btn-outline-danger btn-sm" onClick={() => OnDelete(data.id_prod)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
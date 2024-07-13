import axios from 'axios';
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
//import { Link } from "react-router-dom";
import authHeader from './authHeader';

export default function ListComponent() {
    const [dataclient, setDataclient] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:3000/api/user/list';
        axios.get(url, {headers:authHeader()})
            .then(res => {
                if (res.data.success) {
                    setDataclient(res.data.data);
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

    const onDelete = (id_user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this client!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                sendDelete(id_user);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your client is safe :)',
                    'error'
                );
            }
        });
    };

    const sendDelete = (id_user) => {
        const baseUrl = "http://localhost:3000/api/user/delete";
        axios.delete(`${baseUrl}/${id_user}`, { headers: authHeader() })
            .then(response => {
                if (response.data.success) {
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    );
                    setDataclient(dataclient.filter(user => user.id_user !== id_user));
                } else {
                    Swal.fire(
                        'Error!',
                        response.data.message || 'Failed to delete user.',
                        'error'
                    );
                }
            })
            .catch(error => {
                Swal.fire(
                    'Error!',
                    error.message || 'Failed to delete user.',
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
        <div className="container mt-4">
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Role</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataclient.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{user.id_user}</th>
                            <td>{user.role}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-outline-danger" onClick={() => onDelete(user.id_user)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

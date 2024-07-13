import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authHeader from './authHeader';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nome, setNome] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/profile', { headers: authHeader() });
        setUser(response.data.data);
        setNome(response.data.data.nome);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/profile', { nome }, { headers: authHeader() });
      setUser(response.data.data);
      alert('Profile updated successfully');
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Perfil do Usuário</h2>
      {user && (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <div>
            <label>
              <strong>Nome:</strong>
              <input 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
              />
            </label>
          </div>
          <button onClick={handleUpdate} className="btn btn-primary mt-2">Atualizar</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

// authService.js

import axios from 'axios';

class AuthService {
  async login(email, password) {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw new Error('Utilizador Inválido: ' + error);
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getToken() {
    const user = this.getCurrentUser();
    return user ? user.token : null;
  }
}

const authServiceInstance = new AuthService();
export default authServiceInstance;

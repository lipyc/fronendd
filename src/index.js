import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Certifique-se de ajustar o caminho correto para styles.css
import App from './App';



createRoot(document.getElementById('root')).render(<App />);


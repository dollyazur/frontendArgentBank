import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ton composant principal

import './assets/css/main.css'; // Ton fichier CSS principal

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

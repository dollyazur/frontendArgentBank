import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import de Redux
import { store } from './redux/store'; // Import du store
import App from './App'; // Ton composant principal

import './assets/css/main.css'; // Ton fichier CSS principal

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}> {/* Fournit le store à toute l'application */}
            <App />
        </Provider>
    </React.StrictMode>
);

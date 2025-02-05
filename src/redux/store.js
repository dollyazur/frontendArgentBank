import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Correction de l'import

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: import.meta.env.MODE !== 'production', // Adapté pour Vite
});

export default store;


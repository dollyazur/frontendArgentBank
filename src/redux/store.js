import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import du reducer user

export const store = configureStore({
    reducer: {
        user: userReducer, // Ajout du reducer user
    }, 
});

export default store;

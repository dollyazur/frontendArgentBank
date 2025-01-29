import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;

//Explication du code :
//initialState : L'état initial contient token (pour la connexion) et user (les infos de l'utilisateur).
//loginSuccess : Met à jour token et user quand l'utilisateur se connecte.
//logout : Réinitialise l'état quand l'utilisateur se déconnecte.
//store.js : Ajoute userSlice au store Redux.
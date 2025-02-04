import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { loginSuccess, logout, updateUser } = userSlice.actions;

// Sélecteurs
export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;



// Explication du code :
// initialState : L'état initial contient token (pour la connexion) et user (les infos de l'utilisateur).
// loginSuccess : Met à jour token et user quand l'utilisateur se connecte.
// logout : Réinitialise l'état quand l'utilisateur se déconnecte.
// updateUser : Met à jour les informations de l'utilisateur en fusionnant les nouvelles données avec les existantes.
// store.js : Ajoute userSlice au store Redux.

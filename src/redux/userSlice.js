import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
    },
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        const storedData = JSON.parse(localStorage.getItem('user'));
        if (storedData) {
          storedData.user = state.user;
          localStorage.setItem('user', JSON.stringify(storedData));
        }
      }
    },
    loadUser: (state) => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser.token) {
            state.user = parsedUser.user;
            state.token = parsedUser.token;
          } else {
            localStorage.removeItem('user'); // Supprime les données invalides
          }
        } catch (error) {
          console.error("Erreur de parsing des données utilisateur :", error);
          localStorage.removeItem('user');
        }
      }
    },
  },
});

export const { loginSuccess, logout, updateUser, loadUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;




// Explication du code :
// initialState : L'état initial contient token (pour la connexion) et user (les infos de l'utilisateur).
// loginSuccess : Met à jour token et user quand l'utilisateur se connecte.
// logout : Réinitialise l'état quand l'utilisateur se déconnecte.
// updateUser : Met à jour les informations de l'utilisateur en fusionnant les nouvelles données avec les existantes.
// store.js : Ajoute userSlice au store Redux.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router 
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/userSlice';
import Home from './pages/Home'; // ✅ Ajout de Home
import SignIn from './pages/SignIn';
import User from './pages/User';
import Erreur from './pages/Erreur';
import PrivateRoute from './components/PrivateRoute';

const App = () => {

    const dispatch = useDispatch();
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (storedUser) {
        dispatch(loginSuccess(JSON.parse(storedUser)));
        console.log('Stored user data loaded:', storedUser); // Pour vérifier dans la console
    }
    useEffect(() => {
       
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* ✅ Home est maintenant la page d'accueil */}
                <Route path="/sign-in" element={<SignIn />} /> {/* ✅ SignIn déplacé sur /sign-in */}
                <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
                <Route path="/*" element={<Erreur />} />
            </Routes>
        </Router>
    );
};

export default App;



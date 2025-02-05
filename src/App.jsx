import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/userSlice';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Erreur from './pages/Erreur';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                dispatch(loginSuccess(parsedUser));
                console.log('Stored user data loaded:', parsedUser);
            } catch (error) {
                console.error('Error parsing stored user data:', error);
            }
        }
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
                <Route path="/*" element={<Erreur />} />
            </Routes>
        </Router>
    );
};

export default App;



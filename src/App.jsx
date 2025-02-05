import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/userSlice';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Erreur from './pages/Erreur';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
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



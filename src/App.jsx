import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router 
import Home from './pages/Home'; // ✅ Ajout de Home
import SignIn from './pages/SignIn';
import User from './pages/User';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* ✅ Home est maintenant la page d'accueil */}
                <Route path="/sign-in" element={<SignIn />} /> {/* ✅ SignIn déplacé sur /sign-in */}
                <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;



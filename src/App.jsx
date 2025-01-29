
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import User from './pages/User';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ Home devient la page d'accueil */}
            <Route path="/sign-in" element={<SignIn />} /> {/* ✅ SignIn est déplacé sur /sign-in */}
                <Route path="/user" element={<User />} /> {/* Route pour User */}
            </Routes>
        </Router>
    );
};

export default App;

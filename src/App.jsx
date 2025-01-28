
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import SignIn from './pages/SignIn';
import User from './pages/User';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} /> {/* Route pour SignIn */}
                <Route path="/user" element={<User />} /> {/* Route pour User */}
            </Routes>
        </Router>
    );
};

export default App;

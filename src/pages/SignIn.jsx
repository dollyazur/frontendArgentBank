import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../redux/userSlice';
import '../assets/css/main.css';
import logo from '../assets/images/argentBankLogo.webp';
import Footer from '../components/footer/footer';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email,
                password,
            });

            const { token } = response.data.body; //si email et password qu'on vient de post sont bons, on recupère le token

            //plusieurs users donc tenir compte du token pour récup les infos
            const userResponse = await axios.get(
                'http://localhost:3001/api/v1/user/profile',
                { headers: { Authorization: `Bearer ${token}` } }
            );
            
            const userData = { token, user: userResponse.data.body };

            dispatch(loginSuccess(userData)); //stocke les infos dans redux et localstorage

            const storage = rememberMe ? localStorage : sessionStorage;
            storage.setItem('user', JSON.stringify(userData));
            console.log('User data saved:', userData);
           
            navigate('/user'); //redirection vers la page/user
        } catch (error) {
            console.error('Erreur de connexion :', error);
            setError('Email ou mot de passe incorrect.');
        }
    };

    return (
        <>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper-signin">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-wrapper-signin">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
            
            <Footer />
        </>
    );
};

export default SignIn;
 
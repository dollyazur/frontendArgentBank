import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateUser, logout, loadUser } from '../redux/userSlice';
import axios from 'axios';
import logo from '../assets/images/argentBankLogo.webp';
import Account from "../components/account/account";
import Footer from '../components/footer/footer';
import '../assets/css/main.css';

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Chargement des données Redux
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState("");

    useEffect(() => {
        dispatch(loadUser()); // Charge les données dans le localStorage
    }, [dispatch]);

    useEffect(() => {
        if (!token) {
            navigate('/sign-in');
        } else if (user) {
            setNewUserName(user.userName); // Met à jour le champ username
        }
    }, [token, user, navigate]);

    const handleUpdateUserName = async () => {
        if (!newUserName || newUserName === user?.userName) return;

        try {
            //  Envoi la requête http PUT  afin que le username reste stocké dans la base de données (=mongoDB)
            //axios = client http de node.js 
            const response = await axios.put(
                'http://localhost:3001/api/v1/user/profile',
                { userName: newUserName },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.status === 200) {
                const updatedUser = { ...user, userName: newUserName };
                dispatch(updateUser(updatedUser)); // Met à jour Redux avec le nouveau userName
                setIsEditing(false);
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
        }
    };
    
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <>
            <nav className="main-nav">
                <Link className="main-nav-logo">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className="main-nav-items">
                    <span className="main-nav-item user-info">{user?.userName}</span>
                    <i className="fa-solid fa-user-circle"></i>
                    <span className="main-nav-item">
                        <i className="fa-solid fa-gear"></i>
                    </span>
                    <Link className="main-nav-item" to="/" onClick={handleLogout} aria-label="Sign out">
                        <i className="fa-solid fa-power-off"></i>
                    </Link>
                </div>
            </nav>

            <main className="main bg-light">
                <div className="header">
                    <h2>Welcome back<br />{user?.firstName} {user?.lastName}!</h2>
                    {!isEditing && (
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Username</button>
                    )}
                </div>
                
                {isEditing && (
                    <div className="edit-user-info">
                        <h2>Edit user info</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdateUserName();
                        }}>
                            <div className="input-wrapper">
                                <label htmlFor="username">User name:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={newUserName}
                                    onChange={(e) => setNewUserName(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="firstname">First name:</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    value={user?.firstName || ''}
                                    disabled
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="lastname">Last name:</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    value={user?.lastName || ''}
                                    disabled
                                />
                            </div>
                            <div className="button-wrapper">
                                <button type="submit" className="save-button">Save</button>
                                <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )}

                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            </main>

            <Footer />
        </>
    );
};

export default User;

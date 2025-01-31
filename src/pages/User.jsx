import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { updateUser } from '../redux/userSlice';
import logo from '../assets/images/argentBankLogo.png';
import '../assets/css/main.css';

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);

    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(user?.userName || '');

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!token) {
                console.error("Aucun token disponible, impossible de récupérer les données.");
                return;
            }

            try {
                const response = await axios.get(
                    'http://localhost:3001/api/v1/user/profile',
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                console.log("Données utilisateur récupérées :", response.data.body);
                dispatch(updateUser(response.data.body));
                setNewUserName(response.data.body.userName);
            } catch (error) {
                console.error("Erreur lors de la récupération du profil :", error);
            }
        };

        fetchUserProfile();
    }, [dispatch, token]);

    const handleUpdateUserName = async () => {
        if (!newUserName || newUserName === user.userName) return;
        try {
            await axios.put(
                'http://localhost:3001/api/v1/user/profile',
                { userName: newUserName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            dispatch(updateUser({ ...user, userName: newUserName }));
            setIsEditing(false);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du nom d\'utilisateur:', error);
        }
    };

    return (
        <>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <span className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {user?.userName || "Utilisateur"}
                    </span>
                    <Link className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i> Sign Out
                    </Link>
                </div>
            </nav>

            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user?.firstName} {user?.lastName}!</h1>
                    {isEditing ? (
                        <div>
                            <input
                                type="text"
                                value={newUserName}
                                onChange={(e) => setNewUserName(e.target.value)}
                                placeholder="New username"
                            />
                            <button onClick={handleUpdateUserName}>Save</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    ) : (
                        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Username</button>
                    )}
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </>
    );
};

export default User;


import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        // Existing fetchUserProfile code remains unchanged
    }, [dispatch, token]);

    const handleUpdateUserName = async () => {
        if (!newUserName || newUserName === user.userName) return;
        try {
            // Simulating API call without axios
            await new Promise(resolve => setTimeout(resolve, 500));
            dispatch(updateUser({ ...user, userName: newUserName }));
            setIsEditing(false);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du nom d\'utilisateur:', error);
        }
    };

    return (
        <>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/" aria-label="Retour à l'accueil">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className="main-nav-items">
                    <span className="main-nav-item user-info">
                        {user?.userName}
                        </span>
                        <i className="fa-solid fa-user-circle"></i>
                    
                    <span className="main-nav-item">
                        <i className="fa-solid fa-gear"></i>
                    </span>
                    <Link className="main-nav-item" to="/"aria-label="Sign out">
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
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <h4 className="account-amount">$2,082.79</h4>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <span className="transaction-button">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <h4 className="account-amount">$10,928.42</h4>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <span className="transaction-button">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <h4 className="account-amount">$184.30</h4>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <span className="transaction-button">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
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






import{ useSelector } from 'react-redux';
import '../assets/css/main.css'; // Import du CSS
import logo from '../assets/images/argentBankLogo.png'; // Import du logo

const User = () => {
    const user = useSelector((state) => state.user.user); // Récupère l'utilisateur depuis Redux

    return (
        <>
            <nav className="main-nav">
            <a className="main-nav-logo" href="/">

        <img
            className="main-nav-logo-image"
            src={logo} // Chemin corrigé pour le logo
            alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
 </a>
    <div>
        <span className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user ? user.firstName : "Utilisateur"} {/* Affiche le prénom de l'utilisateur connecté */}
        </span>
        <a className="main-nav-item" href="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
        </a>
    </div>
</nav>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user ? user.firstName : "Utilisateur"} {user ? user.lastName : ""}!</h1>
                    <button className="edit-button">Edit Name</button>
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

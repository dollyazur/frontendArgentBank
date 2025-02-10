import "../assets/css/main.css";
import Footer from "../components/footer/footer";

const PleaseLogin = () => {
    return (
        <>
        <main className="please-login">
            <h1>Accès restreint</h1>
            <p>Vous devez être connecté pour accéder à cette page.</p>
            <a href="/sign-in">Se connecter</a>
        </main>
        <Footer />
        </>
    );
};

export default PleaseLogin;
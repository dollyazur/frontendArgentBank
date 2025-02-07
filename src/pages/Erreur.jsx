import image from "../assets/images/android-chrome-512x512.png";
import "../assets/css/main.css";
import Footer from "../components/footer/footer";

function Error_404() {
  return (
    <>
    <main className="error_404">
      <img src={image} alt="404 en vert" />
      <h1> Erreur! La page que vous demandez n'existe pas.</h1>
      <a href="/">Retourner sur la page d'accueil</a>
    </main>

<Footer />
</>
  );
}

export default Error_404;
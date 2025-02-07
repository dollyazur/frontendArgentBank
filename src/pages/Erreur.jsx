import image from "../assets/images/android-chrome-512x512.webp";
import "../assets/css/main.css";
import Footer from "../components/footer/footer";

function Error_404() {
  return (
    <>
    <main className="error_404">
      <img src={image} alt="404 en vert" />
      <h1> Erreur! La page que vous demandez n&apos;existe pas.</h1>
      <a href="/">Retourner sur la page d&apos;accueil</a>
    </main>

<Footer />
</>
  );
}

export default Error_404;
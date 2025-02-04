import image from "../assets/images/android-chrome-512x512.png";
import "../assets/css/main.css";

function Error_404() {
  return (
    <div className="error_404">
      <img src={image} alt="404 en vert" />
      <h2> Erreur! La page que vous demandez n'existe pas.</h2>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Error_404;
//  Importation de ReactNode pour typer les enfants du composant
import { ReactNode } from "react";

// Déclaration de l'interface Props pour typer les propriétés du composant Alert
interface Props {
  children: ReactNode; // les enfants du composant de type ReactNode
  onClose: () => void; // fonction à appeler lorsque l'alerte est fermée
}

// Définition du composant fonctionnel Alert
const Alert = ({ children, onClose }: Props) => {
  return (
    // classe Bootstrap pour styler l'alerte
    // classe = mot reservé donc on utilise className
    <div className="alert alert-primary alert-dismissible">
      {children}{" "}
      {/* affichage du contenu passé en tant qu'enfants duu composant*/}
      <button
        type="button" // spécifie le type
        className="btn-close" // class Bootstrap pour le style
        onClick={onClose} // appel de la fonction onClose lors du click sur le bouton
        data-bs-dismiss="alert" // attribut de données pour permettre à bootstrap de gérer la fermeture de l'alerte
        aria-label="Close" // attribut d'accessibilité pour le label du bouton
      ></button>
    </div>
  );
};

// exportation du composant Alert pour utilisation dans d'autres fichiers
export default Alert;

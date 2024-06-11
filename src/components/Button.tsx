// Déclaration de l'interface Props pour typer les propriétés du composant Button
interface Props {
  children: string; // Le texte à afficher à l'intérieur du bouton
  color?: "primary" | "secondary" | "danger"; // La couleur du bouton est optionnelle
  onClick: () => void; // Fonction à appeler lorsque le bouton est cliqué
}

// Définition du composant fonctionnel Button
// Utilisation des propriétés destructurées : children, onClick et color avec une valeur par défaut de "primary" pour color
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    // Classe Bootstrap pour styliser le bouton avec une classe dynamique basée sur la prop color
    <button className={"btn btn-" + color} onClick={onClick}>
      {children} {/* Affichage du texte passé en tant qu'enfant du composant */}
    </button>
  );
};

// Exportation du composant Button pour utilisation dans d'autres fichiers
export default Button;

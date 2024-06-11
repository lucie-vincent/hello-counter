import { useState } from "react"; // importation du hook useState pour gérer l'état

// déclaration de l'interface Props pour typer les propriétés du composant ListGroup
interface Props {
  items: string[]; //tableau de string qui représente les éléments de la liste
  heading: string; // titre de la liste
  onSelectItem: (item: string) => void; // fonction à appeler lors de la sélection d'un élément
}

// Définition du composant fonctionnel ListGroup
function ListGroup({ items, heading, onSelectItem }: Props) {
  //   Utilisation du hook useState pour gérer l'état de l'index sélectionné
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   selectedIndex : variable d'état qui contient l'index de lélément sélectionné
  //   setSelectedIndex : fonction pour mettre à jour selectedIndex

  return (
    // on utilise un fragment pour wrapper les éléments (h1 et ul)
    <>
      {/* affichage du titre passé en prop */}
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* affichage conditionnel si la liste est vide */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* on utilise la méthode map des array pour itérer dans le tableau items */}
        {/* chaque élément est entouré de {} pour évaluer les expression JS en JSX */}
        {items.map((item, index) => (
          <li
            // Application d'une classe CSS conditionnelle basée sur l'élément sélectionné
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item} // Utilisation de l'élément comme clé unique pour chaque item
            onClick={() => {
              // Gestionnaire de clic pour chaque élément de la liste
              setSelectedIndex(index); // Mise à jour de l'index sélectionné
              onSelectItem(item); // Appel de la fonction onSelectItem passée en prop
            }}
          >
            {item} {/* affichage du texte de l'élément */}
          </li>
        ))}
      </ul>
    </>
  );
}

// exportation du composant ListGroup pour utilisation dans d'autres fichiers
export default ListGroup;

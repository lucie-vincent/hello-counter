// on importe le useState au début du fichier pour gérer l'état local du composant
import { useState } from "react";

// on crée le composant fonctionnel
const Counter = () => {
  // on utilise le hook useState pour déclarer une variable d'état 'count' initialisée à 0
  // 'count' est la valeur actuelle du compteur
  // 'setCount' est une fonction qui permet de mettre à jour la valeur de 'count
  const [count, setCount] = useState(0);

  // on crée une méthode pour augmenter le compteur
  const augmenter = () => {
    setCount(count + 1); // on met à jour l'état 'count' en ajoutant 1
  };

  // on crée une méthode pour diminuer le compteur
  const diminuer = () => {
    setCount(count - 1); // on met à jour l'état 'count' en soustrayant 1
  };

  // le composant retourne du JSX pour être rendu dans l'interface utilisateur
  return (
    <div>
      {/* gestionnaire d'événement onClick qui appelle les fonctions */}
      <button onClick={diminuer}> - </button>
      {count}
      <button onClick={augmenter}> + </button>
    </div>
  );
};

// on exporte le composant Counter pour pouvoir l'utiliser dans d'autres fichiers
export default Counter;

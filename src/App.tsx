// Importations des composants nécessaires
// import ListGroup from "./components/ListGroup";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import Counter from "./components/Counter";
import Sum from "./components/Sum";

function App() {
  // Déclaration d'un tableau d'items
  // let items = ["New York", "San Francisco", "London", "Paris"];

  // Fonction pour gérer la sélection d'un item
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // Déclaration d'un état pour la visibilité de l'alerte
  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* Utilisation du composant ListGroup avec ses props */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* Affichage conditionnel du composant Alert en fonction de l'état alertVisible */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )} */}
      {/* Utilisation du composant Button pour afficher l'alerte en changeant l'état alertVisible */}
      {/* <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button> */}
      <Counter />
      <Counter />
      <Sum />
    </div>
  );
}

// Exportation du composant App pour utilisation dans d'autres fichiers
export default App;

cd Backend : npm install, npm run create, npm run serve
Sur la racine : npm install, npm run dev

//
COUCOU L'ÉQUIPE, JE VOUS METS DANS LE README QUESLQUES TIPS POUR QU'ON SOIT LE PLUS EFFICACE POSSIBLE.BON COURAGE, Valériane.
///////////////////////////////////////////////////

ATTENTION TIPS: {
https://openclassrooms.com/fr/courses/5641796-adoptez-visual-studio-comme-environnement-de-developpement/6140631-utilisez-les-raccourcis-pour-etre-plus-efficace
Ci dessus, vidéo explicative pour les snippets + doc (je mets egalement le lien sur le trello dans ressources)
}

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

STATE:
//Dans quel cas:
Le state nous permet de contrôler l'affichage et la logique de l'application. Chaque composant peut contenir un ou plusieurs states, grâce au hook useState . Dès qu'un des states change, le composant est automatiquement mis à jour

//Exemple:
function MonComposant() {
// on utilise le hook useState de React
const [count, setCount] = React.useState(0);

    return (
        // on affiche un bouton
        <button
            // au clique, on change le state avec setCount
            onClick={() => setCount(count + 1)}
        >
            {/* on utilise le state dans l'affichage */}
            {count}
        </button>
    );

}
////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

PROPS:
//Dans quel cas:
Lorsque React rencontre un élément représentant un composant défini par l'utilisateur, il transmet les attributs JSX et les enfants à ce composant sous la forme d'un objet unique. Nous appelons cet objet « props ».
Les props sont donc des objets que l'on peut récupérer dans les paramètres de notre composant fonction.

//Exemple:
Commençons par la lumière : dans chaque item plante, on vient ajouter un composant CareScale et on lui passe la prop value :

    <CareScale scaleValue={plant.light} />

Mais du coup, comment récupérer la valeur d'une prop dans notre composant ?
Eh bien, les props sont récupérées dans les paramètres de la fonction qui définit notre composant.
Pour CareScale, on aura donc :

    function CareScale(props) {
      const scaleValue = props.scaleValue

    return <div>{scaleValue}☀️</div>
    }

    export default CareScale

on voulait une échelle de 1 à 3? On va donc partir sur une liste, qu'on peut créer manuellement.
Ce qui nous donne :

function CareScale(props) {
const scaleValue = props.scaleValue

    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )

}

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

MAP:
//Dans quel cas:
La méthode JavaScript map() passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément.

Par exemple, pour une fonction qui doublerait la valeur d'un élément, cela donne :

    const numbers = [1, 2, 3, 4]
    const doubles = numbers.map(x => x \* 2) // [2, 4, 6, 8]

Dans notre cas, elle va nous permettre de prendre une liste de données, et de la transformer en liste de composants.

La méthode map() permet facilement d'itérer sur des données et de retourner un tableau d'éléments. Comme elle, les méthodes forEach(), filter(), reduce(), etc., qui permettent de manipuler des tableaux, seront également vos alliés en React.

//Exemple:
Dans ce fichier, on déclare une variable plantList qui contient notre liste de plantes :

    const plantList = [
        'monstera',
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]

Et on ajoute en dessous le composant lui-même :

    function ShoppingList() {
    return (
        <ul>
          {plantList.map((plant) => (
            <li>{plant}</li>
          ))}
        </ul>
      )
    }

    export default ShoppingList

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

USE EFFECT:
//Dans quel cas:
Dans certains cas certains composants vont avoir besoin de transférer des informations à des systèmes externes à React. Dans ce cas là on va pouvoir utiliser la fonction useEffect .

//Exemple:
Disons que je veux créer une alerte lorsque j'ajoute une plante à mon panier, et que cette alerte affiche le montant total du panier. ATTENTION LE USEEFFECT SE METS JUSTE AVANT LE RETURN!

Pour ça, une petite ligne de code suffit dans Cart.js :

    useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    })
    return.....

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

API FETCH:
//Dans quel cas:
L'API Fetch (en anglais, le verbe fetch signifie récupérer) fournit une interface JavaScript pour accéder et manipuler certaines parties du protocole, comme les requêtes et les réponses. Elle fournit également une méthode globale fetch() qui permet un accès pratique aux ressources récupérées de façon asynchrone sur le réseau.
l'API Fetch utilise les promesses et fournit une meilleure alternative, qui peut être utilisée dans les service workers. L'API Fetch intègre également des concepts HTTP avancés tels que le CORS et d'autres extensions de HTTP.

//Exemple:

    useEffect(() => {
      fetch(`http://localhost:8000/survey`)
        .then((response) => response.json()
        .then(({ surveyData }) => console.log(surveyData))
        .catch((error) => console.log(error))
      )
    }, [])

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

LOADER:
//Dans quel cas:

//Exemple:

    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          loader: () => {
            return axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/api/beers`)
          .then((response) => {
            return response.data;
          });
        },
      },
    ])

//Tips: voir vidéo présente dessous.
https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7255783-exploitez-vos-connaissances-de-usestate-et-useeffect-pour-effectuer-des-calls-api

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

CONTEXT:
//Dans quel cas:
Contexte est un moyen de partager simplement les props entre les composants. Contexte est natif à React et ne nécessite pas d'installer quoi que ce soit de plus.
Contexte nous permet de récupérer simplement nos datas sans avoir à tout passer manuellement. Pour cela, on englobe le composant parent le plus haut dans l’arborescence de composants avec ce qu’on appelle un Provider . Tous les composants enfants pourront alors se connecter au Provider (littéralement en anglais, le “fournisseur”) et ainsi accéder aux props, sans avoir à passer par tous les composants intermédiaires. On dit que les composants enfants sont les Consumers (consommateurs).

//Exemple:
Dans le main.jsx:

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(
    <React.StrictMode>
        <BeerProvider>
        <RouterProvider router={router} />
        </BeerProvider>
    </React.StrictMode>
    );

Dans le context.jsx :

    const BeerContext = createContext();

    export const useBeerContext = () => useContext(BeerContext);

Puis faire un state et enregistrer dans le localsStorage en passant ses props et ses fonctions.

////////////////////////////////////////////////////
///////////////////////////////////////////////////
//////////////////////////////////////////////////

ATTENTION TIPS: {
Formater la sélection : l ajuster les espacements et l’indentation en sélectionnant une portion de code, et en utilisant Ctrl+K+F.

}

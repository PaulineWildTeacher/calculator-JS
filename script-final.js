// puisque l'on fait trois fois un prompt, on peut économiser du code en créant une fonction getUserInput
// On appelera cette fonction autant de fois qu'on voudra demander son avis à l'utilisateur

function getUserInputNumber(promptMessage) {
  // avoir les prompt dans une fonction est plus propre que de les stocker dans des variables globales à l'extérieur d'une fonction (rappel : on essaie d'éviter les variables globales car n'importe qui pourra y accéder et les modifier)
  let userInput = prompt(promptMessage);
  return userInput ? parseInt(userInput) : NaN;
}

// on écrit une seconde fonction, qui ne nous sert qu'à calculer (nous permettra de nous en servir à nouveau si nous voulons calculer autre chose, sans faire de prompt)
function calculate(firstValue, secondValue, operator) {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "*":
      return firstValue * secondValue;
    case "/":
      return secondValue !== 0
        ? firstValue / secondValue
        : "Erreur: Division par zéro";
    default:
      return "Erreur: Opérateur non valide";
  }
}

// notre fonction dans laquelle on met la logique de notre exercice
function calculator() {
  let firstValue = getUserInputNumber("Veuillez choisir une première valeur"); // on appelle getUserInput et on stocke sa valeeur de return dans la variable firstValue
  let secondValue = getUserInputNumber("Veuillez choisir une seconde valeur"); // on appelle getUserInput et on stocke sa valeeur de return dans la variable secondValue
  let operator = prompt("Entrez un opérateur : +, -, *, /");

  if (!isNaN(firstValue) && !isNaN(secondValue)) {
    let result = calculate(firstValue, secondValue, operator); // on appelle la fonction calculate en lui passant en arguments les valeurs dont on a besoin
    console.log("Résultat:", result);
  } else {
    console.log("Veuillez entrer des nombres valides");
    calculator(); // on peut rappeler la méthode calculator, dans calculator : cela nous permet de relancer l'action en cas d'erreur (le programme s'arrêtera quand on aura bien rentré des nombres)
  }
}

calculator(); // on appelle la méthode pour lancer le code

function calculator(firstValue = 4, secondValue = 5, operator = "+") {
  let result;

  firstValue = prompt("Veuillez choisir une première valeur");
  secondValue = prompt("Veuillez choisir une seconde valeur");
  operator = prompt("Entrez un operateur : +, -, *, /");

  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);

  //  firstValue = string (exemple 'kikoo')
  // isNan(firstValue) = true (car ce n'est pas un nombre)
  // on veut s'assurer que le parse nous renvoie un nombre

  if (!isNaN(firstValue) && !isNaN(secondValue)) {
    if (operator === "+") {
      result = firstValue + secondValue;
      console.log("result", result);
    } else if (operator === "-") {
      result = firstValue - secondValue;
      console.log("result", result);
    } else if (operator === "*") {
      result = firstValue * secondValue;
      console.log("result", result);
    } else if (operator === "/") {
      if (secondValue !== 0) {
        result = firstValue / secondValue;
      } else {
        console.log("Attention, tu ne peux pas diviser par 0");
      }
      console.log("result", result);
    } else {
      console.log(
        "veuillez entrer un opérateur digne de ce nom : +, -, *, ou /"
      );
    }
  } else {
    console.log("Veuillez entrer des nombres");
  }
}

calculator();

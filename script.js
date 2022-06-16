// Calculator 

// 1 chiedere all'utente di inserire un primo numero, l'operazione da effettuare e un secondo numero
// 2 restituire all'utente il risultato 

function operation() {
  const firstNum = prompt('Inserisci il primo numero');
  const operationChoice = prompt('Inserisci l\'operazione');
  const secondNum = prompt('Inserisci il secondo numero');

  const parsedFirstNum = parseInt(firstNum);
  const parsedSecondNum = parseInt(secondNum);

  if (firstNum.length === 0 || secondNum.length === 0) {
    console.log("Non hai inserito un numero");
  }
  
  switch (operationChoice) {
    case "addizione":
      console.log(
        "Il risultato della tua operazione è:",
        parsedFirstNum + parsedSecondNum
      );
      break;
    case "sottrazione":
      console.log(
        "Il risultato della tua operazione è:",
        parsedFirstNum - parsedSecondNum
      );
      break;
    case "moltiplicazione":
      console.log(
        "Il risultato della tua operazione è:",
        parsedFirstNum * parsedSecondNum
      );
      break;
    case "divisione":
      console.log(
        "Il risultato della tua operazione è:",
        parsedFirstNum / parsedSecondNum
      );
      break;
    default:
      console.log("Non hai selezionato alcuna operazione.");
  }
}

console.log(operation());




// // OBJECT 
// const product = {
//   name: "Gummy Bears",
//   inStock: true,
//   price: 1.99,
//   flavors: ["grape", "apple", "cherry"],
// };

// console.log(product{}.price)

// console.log(product{}.defineProperty('Gummy Bears'))

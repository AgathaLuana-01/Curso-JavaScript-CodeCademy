/*
 Baleia Conversa
Pegue uma frase como 'terebintina e tartarugas' e traduza-a para seu equivalente em “conversa de baleia”: 'UUEEIEEAUUEE'.

Existem algumas regras simples para traduzir texto para a língua das baleias:

Não há consoantes. Apenas vogais excluindo “y”.
Os u's e e' são extra longos, então devemos dobrá-los em nosso programa.
Depois de converter o texto para a língua das baleias, o resultado é cantado lentamente, como é costume no oceano.
 */
let input = 'turpentine and turtles';
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //verifica se a letra atual esta incluida no array de vogais
  if (vowels.includes(input[i].toLowerCase())) {
    //adciona a vogal ao array resultArray
    if (input[i].toLowerCase() === "e") {
      resultArray.push("EE");
    } else if (input[i].toLowerCase() === "u") {
      resultArray.push("UU");
    } else {
      resultArray.push(input[i].toUpperCase());
    }
  }
}

console.log(resultArray.join(''));

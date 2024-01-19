const newNumbers = [1, 3, 5, 7];
// .reduce()
// Retorna um unico valor apos iterar pelos elementos de um array, reduzindo assim o array.
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10); // 10 é um segundo parametro para definir um valor incial no accumulator

console.log(newSum); //16

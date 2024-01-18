//Variavel com valor constante que guarda a temperatura em kelvin
const kelvin = 0;
console.log(`The temperature is ${kelvin} degress Kelvin`);

//Varivael com valor constante da temperatura em celsius
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degress celsius`);

//Variavel let em que seu valor pode ser alterado que mede a temperatura em fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Arredondando a variavel de temperatura fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degress Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degress Newton`);
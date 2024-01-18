let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Remover a última string : 'JavaScript'
secretMessage.pop();

//Mostra a quantidade total de itens: 23
console.log(secretMessage.length);

//incrementa palavras novas no array
secretMessage.push('to', 'Program');

//Encontrando o index onde o item easily está salvo
console.log(secretMessage.indexOf('easily'));
// Substituindo o index 7 ('easily'), por 'right'
secretMessage[7] = 'right';

//Remove o primeiro item do array: 'Learning'
secretMessage.shift();

//Adciona 'Programming'ao primeiro item
secretMessage.unshift('Programming');

/*
Use um método de array para remover as strings get, right, the, first, time,e substitua-as pela string única know,.
*/
//Encontrar as posições
let indiceGet = secretMessage.indexOf('get');
indiceGet ++;
console.log(indiceGet);
const indiceTime = secretMessage.indexOf('time,');
console.log(indiceTime);

secretMessage.splice(indiceGet, indiceTime);
secretMessage[6] = 'know,';

console.log(secretMessage.join(' '));

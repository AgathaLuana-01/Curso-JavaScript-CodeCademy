/*
Chame o .filter()método randomNumberspara retornar valores menores que 250. Salve-os em um novo array chamado smallNumbers, declarado com const.
 */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(random => {
  if(random < 250){
    return random;
  }
});
console.log(smallNumbers);
/*Agora vamos trabalhar com um array de strings. Invoque .filter()na favoriteWordsmatriz para retornar elementos que tenham mais de 7 caracteres. Salve o array retornado em uma constvariável chamada longFavoriteWords.
*/
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(favorite =>{
  return favorite.length > 7;
});
console.log(longFavoriteWords);


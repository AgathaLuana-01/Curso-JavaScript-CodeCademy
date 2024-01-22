let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Reatribuindo o valor da propriedade color
  spaceship.color = 'glorious gold';
  console.log(spaceship.color);
  
  //adcionar propiedade
  spaceship['numEngines'] = 8;
  console.log(spaceship);
  
  //deletando
  delete spaceship['Secret Mission'];
  console.log(spaceship);

  let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Métodos em um objeto
//Quando os dados armazenados em um objeto são uma função, chamamos isso de método
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

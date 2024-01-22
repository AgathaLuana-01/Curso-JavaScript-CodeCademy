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
  
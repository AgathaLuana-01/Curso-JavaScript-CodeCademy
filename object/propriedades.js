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


//Passar objetos por referência
let spaceship = {
    "Fuel Type": "Turbo Fuel",
    homePlanet: "Earth",
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = "avocado oil"
  };
  
  let remotelyDisable = obj =>{
   obj.disabled = true;
  };
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship);
  
  //Setter
  const robot = {
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
      if (typeof this._numOfSensors === "number") {
        return this._numOfSensors;
      } else {
        return "Sensors are currently down.";
      }
    },
    set numOfSensors(num) {
      if (typeof num === "number" && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log("Pass in a number that is greater than or equal to 0");
      }
    },
  };
  
  //Use o numOfSensorsmétodo setter robotpara atribuir _numOfSensorsa 100.
  robot.numOfSensors = 100;
  
  console.log(robot.numOfSensors);
  
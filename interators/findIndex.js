const animals = [
    "hippo",
    "tiger",
    "lion",
    "seal",
    "cheetah",
    "monkey",
    "salamander",
    "elephant",
  ];
  
  /*Invoque .findIndex()o animalsarray para encontrar o índice do elemento que possui o valor 'elephant'e salve o valor retornado em uma constvariável chamada foundAnimal.*/
  const foundAnimal = animals.findIndex((animal) => {
    return animal === "elephant";
  });
  console.log(foundAnimal);
  
  /*Vamos ver se conseguimos encontrar o índice do primeiro animal que começa com a letra 's'.
  Chame .findIndex()o animalsarray e retorne o índice do primeiro elemento que começa com 's'. Atribua o valor retornado a uma constvariável chamada startsWithS.
  */
  const startsWithS = animals.findIndex(
    (animal) => animal[0].toLowerCase() === "s"
  );
  console.log(startsWithS);
  
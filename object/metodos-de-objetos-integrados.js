const robot = {
    model: "SAL-1000",
    mobile: true,
    sentient: false,
    armor: "Steel-plated",
    energyLevel: 75,
  };
  
  // Gostaríamos de pegar os nomes das propriedades, também conhecidos como chaves, e salvá-las em um array atribuído a robotKeys
  const robotKeys = Object.keys(robot);
  console.log(robotKeys);
  
  // Declare uma constvariável nomeada robotEntriese atribua a ela as entradas robotchamando Object.entries().
  const robotEntries = Object.entries(robot);
  console.log(robotEntries);
  
  // Declare uma constvariável chamada newRobot. newRobotserá um novo objeto que possui todas as propriedades robote as propriedades do seguinte objeto: {laserBlaster: true, voiceRecognition: true}. Certifique-se de não alterar o robotobjeto!
  
  const newRobot = Object.assign({}, robot, {
    laserBlaster: true,
    voiceRecognition: true,
  });
  
  console.log(newRobot);
  
function getSleepHours(day) {
    switch (
      day.toLowerCase() //.toLowerCase faz com que a comparação no switch de day seja insensível a maiúsculas/minuscúlas
    ) {
      case "monday":
        return 5;
        break;
      case "tuesday":
        return 8;
        break;
      case "wednesday":
        return 6;
        break;
      case "thursday":
        return 7;
        break;
      case "friday":
        return 4;
        break;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 8;
        break;
      default:
        console.log("Invalid day");
        break;
    }
  }
  
  
  //Obtenha o total de horas de sono que você realmente dormiu
  function getActualSleepHours() {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  }
  /*
  Obtenha as horas de sono ideais que você prefere
  Calcule o débito de sono, se houver.
  */
  function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  console.log(
    `Horas totais de sono na semana: ${getActualSleepHours()}h \nHoras de sono ideais: ${getIdealSleepHours()}h`
  );
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    let debit;
  
    if (actualSleepHours === idealSleepHours) {
      console.log("Dormiu a quantidade perfeita");
    } else if (actualSleepHours > idealSleepHours) {
      debit = actualSleepHours - idealSleepHours;
      console.log(`Dormiu ${debit} mais do que o nescessário h`);
    } else {
      debit = idealSleepHours - actualSleepHours;
      console.log(`Deve descansar ${debit}h`);
    }
  }
  
  calculateSleepDebt();
  
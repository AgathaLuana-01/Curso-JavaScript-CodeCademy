const team = {
    _players: [
      { firstName: "Eren", lastName: "Yeager", age: 19 },
      { firstName: "Light", lastName: "Yagami", age: 23 },
      { firstName: "Gaara", lastName: "Sabaku no", age: 17 },
    ],
    _games: [],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this._games.push(game);
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame('Titans', 100, 98);
  console.log(team.players);
  console.log(team._games);
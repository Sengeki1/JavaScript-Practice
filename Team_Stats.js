const team = {
    _players: [{firstName: 'Bruno', lastName: 'Fernandes', age: 39}, 
          {firstName: 'Ronaldinho', lastName: 'Gaucho', age: 66},
          {firstName: 'Cristiano', lastName: 'Ronaldo', age:54}
      ],
    _games: [{opponent: 'LiverPool', teamPoints: 12, opponentPoints: 11},
          {opponent: 'Manchester United', teamPoints: 10, opponentPoints: 9},
          {opponent: 'Benfica', teamPoints: 8, opponentPoints: 12}
    ],
  
    get players () {
      return this._players
    },
  
    get games () {
      return this._games
    },
  
    addPlayer (newFirstName, newLastName, newAge) {
     const player = {
       firstName: newFirstName,
       lastName: newLastName,
       age: newAge
      }
     this._players.push(player)
  },
  
    addGame (newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game)
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team._players);
  console.log(team._games);
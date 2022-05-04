function Player() {
  this.totalScore = 0; // running score for the player
  this.currentScore = 0;  // score for this round
  this.turn = true;  // allows switching between players
}

function roll() {
  let diceRoll = Math.floor(Math.random() * 6)+1;
  return diceRoll;
}

Player.prototype.addToScore = function(player) {
  this.totalScore += this.currentScore; 
}

let player1 = new Player();
let player2 = new Player();

Player.prototype.playerTurn=function() {
  if (player1.turn) {
    player1.turn = false;
    player2.turn = true;
    player1.highlight();

  }else{
    player1.turn = true;
    player2.turn = false;
    player2.highlight();
  }
}



$(document).ready(function () {
  $("#rollButton").click(function() {
    if (player1.turn){
      let dieRoll = roll();
      if (dieRoll !== 1) {
        player1.currentScore += dieRoll;
      } else {
        player1.currentScore = 0;
      }
      $("#playerOneCurrentScore").text(player1.currentScore);
      player1.playerTurn();
    } else {
      let dieRoll = roll();
      if (dieRoll !== 1) {
        player2.currentScore += dieRoll;
      } else {
        player2.currentScore = 0;
      }
      $("#playerTwoCurrentScore").text(player2.currentScore);
      player2.playerTurn();
    }
  });
});

$("#holdButton").click(function() {
  if (player1.turn){
    player1.addToScore();
    if (totalScore >= 100) {
      alert("Player 1 wins!");
    }
    player1.currentScore = 0;
    $("#playerOneTotalScore").text(player1.totalScore);
    player1.playerTurn();
  } else {
    player2.addToScore();
    if (totalScore >= 100) {
      alert("Player 2 wins!");
    }
    player2.currentScore = 0;
    $("#playerTwoTotalScore").text(player2.totalScore);
    player2.playerTurn();
  }
});

  // $("#player1RollButton").click(function() {
  //   let dieRoll = roll();
  //   if (dieRoll !== 1) {
  //     player1.currentScore += dieRoll;
  //   } else {
  //     player1.currentScore = 0;
  //   }
  // });
  // $("#player2RollButton").click(function () {
  //   let dieRoll = roll();
  //   if (dieRoll !== 1) {
  //     player2.currentScore += dieRoll;
  //   } else {
  //     player2.currentScore = 0;
  //   }
  // });

    // $("#player1HoldButton").click(function() {
  //   player1.totalScore += player1.currentScore.
  //   if (totalScore >= 100) {
  //     alert("Player 1 wins!");
  //   }
  //   player1.currentScore = 0;
  // });
  // $("#player2HoldButton").click(function() {
  //   player2.totalScore += player2.currentScore.
  //   if (totalScore >= 100) {
  //     alert("Player 2 wins!");
  //   }
  //   player2.currentScore = 0;
  // });
const handOptions = {
  "rock": "/rock.png",
  "paper": "/paper.png",
  "scissors": "/scissors.png"
}

let SCORE = 0;
let CPSCORE = 0;
// let user = ["Player", "Computer"];

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // here we are setting user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  // here we are setting the computer image
  document.getElementById("computerPickImage").src = handOptions[cpHand]

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {

  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }

  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }

  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }

  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setCPScore(CPSCORE + 1);
  }

  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setCPScore(CPSCORE + 1);
  }

  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setCPScore(CPSCORE + 1);
  }

  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }

  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }

  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }

};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const endGame = () => {
  if (SCORE === 2 || CPSCORE === 2) {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  }
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}

const setCPScore = (cpNewScore) => {
  CPSCORE = cpNewScore;
  document.querySelector(".cpscore h1").innerText = cpNewScore;
}

// End Game
// let isGameOver = (score) => {
//   if (SCORE === 2 || CPSCORE === 2) {
//     return true;
//   }
//   return false;
// }

// function gameOver() {
//   let winner = SCORE === 2 ? user[0] : user[1];
//   console.log(winner);
// }

// function theFunctionThatChangesTheScores() {
//   // after the code that changes the score
//   if (isGameOver()) {
//     // you can code in this block, but ideally.
//     // create another function and call it:
//     return gameOver();
//   }
//   return console.log("game is still on");
// }

// theFunctionThatChangesTheScores();
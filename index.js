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
    let hands = document.querySelector(".hands");
    contest.style.display = "none"; hands.style.display = "none";
  }
  if (CPSCORE == 2) {
    let winnerRn = document.getElementById("displayWinnerRn");
    winnerRn.style.display = "flex";
  } else {
    let winnerCp = document.getElementById("displayWinnerCp");
    winnerCp.style.display = "flex";
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

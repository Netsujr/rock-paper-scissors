// dictionary data structure \/
const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",
  "scissors": "/assets/Scissors.png"
}


const pickUserHand = (hand) => {
  // console.log(hand);
  let hands = document.querySelector(".hands");
  hands.style.display = "none"

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // setting user pick
  document.getElementById("userPickImage").src = handOptions[hand];

  let cpHand = pickComputerHand();
}

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"]
  // console.log(hands[1]);
  let cpHand = hands[Math.floor(Math.random() * 3)]

  document.getElementById("computerPickImage").src = handOptions[cpHand];

  return cpHand;
}

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

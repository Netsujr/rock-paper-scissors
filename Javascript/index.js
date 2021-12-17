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

}

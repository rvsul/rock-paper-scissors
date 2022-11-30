const handOptions = {
  rock: "/assets/Rock.png",
  scissors: "/assets/Scissors.png",
  paper: "/assets/Paper.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  // hide the current page
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  // show the next page with the hand you picked
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  //set the user pick
  document.getElementById("userPickImage").src = handOptions[hand];
  pickHouseHand(hand);
};

const pickHouseHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let houseHand = hands[Math.floor(Math.random() * hands.length)];
  document.getElementById("housePickImage").src = handOptions[houseHand];
  referee(hand, houseHand);
};

const referee = (userHand, houseHand) => {
  if (userHand == "paper" && houseHand == "scissors") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "paper" && houseHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && houseHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && houseHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && houseHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "rock" && houseHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && houseHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && houseHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "scissors" && houseHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

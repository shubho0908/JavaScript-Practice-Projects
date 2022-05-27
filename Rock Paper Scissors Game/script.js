let player_score = document.getElementById("score-1");
let computer_score = document.getElementById("score-2");
let moves_left = document.getElementById("moves-left");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let result = document.getElementById("result");
let final_result = document.getElementById("final-result");
let score1 = 0;
let score2 = 0;
player_score.innerHTML = score1;
computer_score.innerHTML = score2;
let moves = 0;
moves_left.innerHTML = 10 - moves;

let c_option = "";

//Audio Sections:

let win = new Audio("win.mp3");
let lost = new Audio("lost.mp3");

rock.addEventListener("click", () => {
  a = 1; //Min value
  b = 9; //Max Value
  let rand = a + (b - 1) * Math.random(); //Main Formula
  let rand2 = Math.round(rand);

  console.log("This is moves: ", moves);

  moves++;
  moves_left.innerHTML = 10 - moves;

  if (rand2 >= 1 && rand2 <= 3) {
    c_option = "rock";
  } else if (rand2 >= 4 && rand2 <= 6) {
    c_option = "paper";
  } else if (rand2 >= 7 && rand2 <= 9) {
    c_option = "scissors";
  }
  if (c_option == "rock") {
    result.innerHTML = `It's a Tie!`;
  } else if (c_option == "paper") {
    score2 += 1;
    computer_score.innerHTML = score2;
    result.innerHTML = `You Lose!`;
  } else if (c_option == "scissors") {
    score1 += 1;
    player_score.innerHTML = score1;
    result.innerHTML = `You win!`;
  }
  if (moves == 10) {
    document.getElementById("choose-game").hidden = true;
    if (score1 > score2) {
      result.innerHTML = `You Won the game.`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (score2 > score1) {
      result.innerHTML = `You Lose the game.`;
      lost.play();
      document.getElementById("restart").hidden = false;
    } else {
      result.innerHTML = `Nobody won! It's a Tie.`;
      document.getElementById("restart").hidden = false;
    }
  }
});

paper.addEventListener("click", () => {
  a = 1; //Min value
  b = 9; //Max Value
  let rand = a + (b - 1) * Math.random(); //Main Formula
  let rand2 = Math.round(rand);
  moves++;
  moves_left.innerHTML = 10 - moves;

  if (rand2 >= 1 && rand2 <= 3) {
    c_option = "rock";
  } else if (rand2 >= 4 && rand2 <= 6) {
    c_option = "paper";
  } else if (rand2 >= 7 && rand2 <= 9) {
    c_option = "scissors";
  }
  if (c_option == "rock") {
    score1 += 1;
    player_score.innerHTML = score1;

    result.innerHTML = `You win!`;
  } else if (c_option == "paper") {
    result.innerHTML = `It's a Tie!`;
  } else if (c_option == "scissors") {
    score2 += 1;
    computer_score.innerHTML = score2;
    result.innerHTML = `You Lose!`;
  }
  if (moves == 10) {
    document.getElementById("choose-game").hidden = true;
    if (score1 > score2) {
      result.innerHTML = `You Won the game.`;
      win.play();

      document.getElementById("restart").hidden = false;
    } else if (score2 > score1) {
      result.innerHTML = `You Lose the game.`;
      lost.play();

      document.getElementById("restart").hidden = false;
    } else {
      result.innerHTML = `Nobody won! It's a Tie.`;
      document.getElementById("restart").hidden = false;
    }
  }
});

scissors.addEventListener("click", () => {
  a = 1; //Min value
  b = 9; //Max Value
  let rand = a + (b - 1) * Math.random(); //Main Formula
  let rand2 = Math.round(rand);
  moves++;
  moves_left.innerHTML = 10 - moves;

  if (rand2 >= 1 && rand2 <= 3) {
    c_option = "rock";
  } else if (rand2 >= 4 && rand2 <= 6) {
    c_option = "paper";
  } else if (rand2 >= 7 && rand2 <= 9) {
    c_option = "scissors";
  }
  if (c_option == "rock") {
    score2 += 1;
    computer_score.innerHTML = score2;
    result.innerHTML = `You Lose!`;
  } else if (c_option == "paper") {
    score1 += 1;
    player_score.innerHTML = score1;
    result.innerHTML = `You win!`;
  } else if (c_option == "scissors") {
    result.innerHTML = `It's a Tie!`;
  }
  if (moves == 10) {
    document.getElementById("choose-game").hidden = true;
    if (score1 > score2) {
      result.innerHTML = `You Won the game.`;
      win.play();

      document.getElementById("restart").hidden = false;
    } else if (score2 > score1) {
      result.innerHTML = `You Lose the game.`;
      lost.play();

      document.getElementById("restart").hidden = false;
    } else {
      result.innerHTML = `Nobody won! It's a Tie.`;
      document.getElementById("restart").hidden = false;
    }
  }
});

restart.addEventListener("click", () => {
  location.reload();
});

//DarkMode:

let light = document.getElementById("light");
let dark = document.getElementById("dark");
document.querySelector(".player-score").style.border = "2px solid black";
document.querySelector(".computer-score").style.border = "2px solid black";
document.querySelector(".computer-score").style.borderRadius = "8px";
document.querySelector(".player-score").style.borderRadius = "8px";
document.querySelector(".player-score").style.padding = "50px";
document.querySelector(".computer-score").style.padding = "50px";

dark.addEventListener("click", () => {
  document.getElementById("dark").hidden = true;
  document.getElementById("light").hidden = false;
  document.body.style.backgroundColor = "#191919";
  document.querySelector(".player-score").style.border = "2px solid white";
  document.querySelector(".computer-score").style.border = "2px solid white";
  document.querySelector(".computer-score").style.borderRadius = "8px";
  document.querySelector(".player-score").style.borderRadius = "8px";
  document.querySelector(".player-score").style.padding = "50px";
  document.querySelector(".computer-score").style.padding = "50px";
  document.body.style.color = "white";
  document.body.style.transition = "all .5s";
});

light.addEventListener("click", () => {
  document.getElementById("light").hidden = true;
  document.getElementById("dark").hidden = false;
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.querySelector(".player-score").style.border = "2px solid black";
  document.querySelector(".computer-score").style.border = "2px solid black";
  document.querySelector(".computer-score").style.borderRadius = "8px";
  document.querySelector(".player-score").style.borderRadius = "8px";
  document.querySelector(".player-score").style.padding = "50px";
  document.querySelector(".computer-score").style.padding = "50px";
  ("2px solid black");
  document.body.style.transition = "all .5s";
});

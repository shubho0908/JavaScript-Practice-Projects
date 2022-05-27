let guess = document.getElementById("guess");
let start = document.getElementById("new");
let submit = document.getElementById("submit");
let result = document.getElementById("result");
let attempts = document.getElementById("attempts");
let atmpt = 10;
let audio = new Audio("congrats.mp3");
let audio2 = new Audio("lose-1.mp3");

a = 1; //Min value
b = 100; //Max Value
let rand = a + (b - 1) * Math.random(); //Main Formula
let rand2 = Math.round(rand);
submit.addEventListener("click", function get() {
  let data = guess.value;

  if (data == "") {
    alert("Please enter a number before submitting");
    location.stop();
  }

  if (data == rand2) {
    atmpt -= 1;
    atmpt = 10 - atmpt;

    result.innerHTML = `Congrats!🥳 It's a perfect guess.`;
    attempts.innerHTML = `You've guessed it in ${atmpt} attempts. 😌`;
    let disabled = document.getElementById("guess").disabled;
    document.getElementById("new").hidden = false;
    audio.play();

    if (disabled) {
      document.getElementById("guess").disabled = false;
    } else {
      document.getElementById("guess").disabled = true;
    }
    document.getElementById("submit").disabled = true;

    newGame();
  } else if (data > rand2) {
    atmpt -= 1;
    result.innerHTML = `Too High! Please choose a smaller number. 🤏`;
    attempts.innerHTML = `Only ${atmpt} attempts left. 💀`;
  } else if (data < rand2) {
    atmpt -= 1;
    result.innerHTML = `Too Low! Please choose a higher number. 🙌`;
    attempts.innerHTML = `Only ${atmpt} attempts left. 💀`;
  }
  if (atmpt == 0) {
    result.innerHTML = `Sorry!😔 You've used all your attempts. Better luck next time. `;
    attempts.innerHTML = `Only ${atmpt} attempts left. ❌`;
    audio2.play();
    document.getElementById("new").hidden = false;
    let disabled = document.getElementById("guess").disabled;
    if (disabled) {
      document.getElementById("guess").disabled = false;
    } else {
      document.getElementById("guess").disabled = true;
    }
    document.getElementById("submit").disabled = true;
  }
});

start.addEventListener("click", () => {
  location.reload();
});

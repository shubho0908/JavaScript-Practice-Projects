let turn = "";
document.getElementById("turn").innerHTML = `X's turn`;
document.getElementById("one").disabled = false;
document.getElementById("two").disabled = false;
document.getElementById("three").disabled = false;
document.getElementById("four").disabled = false;
document.getElementById("five").disabled = false;
document.getElementById("six").disabled = false;
document.getElementById("seven").disabled = false;
document.getElementById("eight").disabled = false;
document.getElementById("nine").disabled = false;
document.getElementById("restart").hidden = true;

let click = new Audio("pop.mp3");
let win = new Audio("win.mp3");
let draw = new Audio("draw.mp3");

function checkTurn() {
  if (turn == "X") {
    turn = "O";
    document.getElementById("turn").innerHTML = `X's turn`;
  } else {
    turn = "X";
    document.getElementById("turn").innerHTML = `O's turn`;
  }
}

let box = document.querySelectorAll(".box");
box.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (element.innerHTML !== "") {
    } else {
      checkTurn();
      click.play();
      element.innerHTML = turn;
    }
    if (
      box[0].innerText == element.innerText &&
      box[1].innerText == element.innerText &&
      box[2].innerText == element.innerText
    ) {
      box[0].style.transition = "all .28s";
      box[1].style.transition = "all .28s";
      box[2].style.transition = "all .28s";
      box[0].style.backgroundColor = "#63d363";
      box[1].style.backgroundColor = "#63d363";
      box[2].style.backgroundColor = "#63d363";
      document.getElementById("four").disabled = true;
      document.getElementById("five").disabled = true;
      document.getElementById("six").disabled = true;
      document.getElementById("seven").disabled = true;
      document.getElementById("eight").disabled = true;
      document.getElementById("nine").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[3].innerText == element.innerText &&
      box[4].innerText == element.innerText &&
      box[5].innerText == element.innerText
    ) {
      box[3].style.transition = "all .28s";
      box[4].style.transition = "all .28s";
      box[5].style.transition = "all .28s";
      box[3].style.backgroundColor = "#63d363";
      box[4].style.backgroundColor = "#63d363";
      box[5].style.backgroundColor = "#63d363";
      document.getElementById("one").disabled = true;
      document.getElementById("two").disabled = true;
      document.getElementById("three").disabled = true;
      document.getElementById("seven").disabled = true;
      document.getElementById("eight").disabled = true;
      document.getElementById("nine").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[6].innerText == element.innerText &&
      box[7].innerText == element.innerText &&
      box[8].innerText == element.innerText
    ) {
      box[6].style.transition = "all .28s";
      box[7].style.transition = "all .28s";
      box[8].style.transition = "all .28s";
      box[6].style.backgroundColor = "#63d363";
      box[7].style.backgroundColor = "#63d363";
      box[8].style.backgroundColor = "#63d363";
      document.getElementById("one").disabled = true;
      document.getElementById("two").disabled = true;
      document.getElementById("three").disabled = true;
      document.getElementById("four").disabled = true;
      document.getElementById("five").disabled = true;
      document.getElementById("six").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[0].innerText == element.innerText &&
      box[3].innerText == element.innerText &&
      box[6].innerText == element.innerText
    ) {
      box[0].style.transition = "all .28s";
      box[3].style.transition = "all .28s";
      box[6].style.transition = "all .28s";
      box[0].style.backgroundColor = "#63d363";
      box[3].style.backgroundColor = "#63d363";
      box[6].style.backgroundColor = "#63d363";
      document.getElementById("two").disabled = true;
      document.getElementById("three").disabled = true;
      document.getElementById("five").disabled = true;
      document.getElementById("six").disabled = true;
      document.getElementById("eight").disabled = true;
      document.getElementById("nine").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[1].innerText == element.innerText &&
      box[4].innerText == element.innerText &&
      box[7].innerText == element.innerText
    ) {
      box[1].style.transition = "all .28s";
      box[4].style.transition = "all .28s";
      box[7].style.transition = "all .28s";
      box[1].style.backgroundColor = "#63d363";
      box[4].style.backgroundColor = "#63d363";
      box[7].style.backgroundColor = "#63d363";
      document.getElementById("one").disabled = true;
      document.getElementById("three").disabled = true;
      document.getElementById("four").disabled = true;
      document.getElementById("six").disabled = true;
      document.getElementById("seven").disabled = true;
      document.getElementById("nine").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[2].innerText == element.innerText &&
      box[5].innerText == element.innerText &&
      box[8].innerText == element.innerText
    ) {
      box[2].style.transition = "all .28s";
      box[5].style.transition = "all .28s";
      box[8].style.transition = "all .28s";
      box[2].style.backgroundColor = "#63d363";
      box[5].style.backgroundColor = "#63d363";
      box[8].style.backgroundColor = "#63d363";
      document.getElementById("one").disabled = true;
      document.getElementById("two").disabled = true;
      document.getElementById("four").disabled = true;
      document.getElementById("five").disabled = true;
      document.getElementById("seven").disabled = true;
      document.getElementById("eight").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[0].innerText == element.innerText &&
      box[4].innerText == element.innerText &&
      box[8].innerText == element.innerText
    ) {
      box[0].style.transition = "all .28s";
      box[4].style.transition = "all .28s";
      box[8].style.transition = "all .28s";
      box[0].style.backgroundColor = "#63d363";
      box[4].style.backgroundColor = "#63d363";
      box[8].style.backgroundColor = "#63d363";
      document.getElementById("two").disabled = true;
      document.getElementById("three").disabled = true;
      document.getElementById("four").disabled = true;
      document.getElementById("six").disabled = true;
      document.getElementById("seven").disabled = true;
      document.getElementById("eight").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[2].innerText == element.innerText &&
      box[4].innerText == element.innerText &&
      box[6].innerText == element.innerText
    ) {
      box[2].style.transition = "all .28s";
      box[4].style.transition = "all .28s";
      box[6].style.transition = "all .28s";
      box[2].style.backgroundColor = "#63d363";
      box[4].style.backgroundColor = "#63d363";
      box[6].style.backgroundColor = "#63d363";
      document.getElementById("one").disabled = true;
      document.getElementById("two").disabled = true;
      document.getElementById("four").disabled = true;
      document.getElementById("six").disabled = true;
      document.getElementById("eight").disabled = true;
      document.getElementById("nine").disabled = true;
      document.getElementById(
        "turn"
      ).innerHTML = `"${element.innerText}" Won 🥳`;
      win.play();
      document.getElementById("restart").hidden = false;
    } else if (
      box[0].innerText != "" &&
      box[1].innerText != "" &&
      box[2].innerText != "" &&
      box[3].innerText != "" &&
      box[4].innerText != "" &&
      box[5].innerText != "" &&
      box[6].innerText != "" &&
      box[7].innerText != "" &&
      box[8].innerText != ""
    ) {
      document.getElementById("turn").innerHTML = `"Nobody Won! It's a Draw 😅`;
      draw.play();
      document.getElementById("restart").hidden = false;
    }
  });
});

document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});

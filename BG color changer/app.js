//Element Selections
let head = document.getElementById("head");
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");

first.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  document.body.style.transition = "all .5s";
  head.style.color = "black";
});

second.addEventListener("click", function () {
  document.body.style.transition = "all .5s";
  document.body.style.backgroundColor = "blue";
  head.style.color = "white";
});

third.addEventListener("click", function () {
  head.style.color = "black";
  document.body.style.transition = "all .5s";
  document.body.style.backgroundColor = "rgb(255, 109, 36)";
});

fourth.addEventListener("click", function () {
  head.style.color = "black";
  document.body.style.transition = "all .5s";
  document.body.style.backgroundColor = "pink";
});

fifth.addEventListener("click", function () {
  head.style.color = "black";
  document.body.style.transition = "all .5s";
  document.body.style.backgroundColor = "yellow";
});

sixth.addEventListener("click", function () {
  head.style.color = "white";
  document.body.style.transition = "all .5s";
  document.body.style.backgroundColor = "rgb(38, 38, 38)";
});

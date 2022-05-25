setInterval(time, 1000);
let audio = new Audio("alarm.mp3");

function time() {
  let clck = new Date();
  let hour = clck.getHours();
  let min = clck.getMinutes();
  let sec = clck.getSeconds();

  let timeZone = "AM";
  if (hour >= 12) {
    timeZone = "PM";
  }
  let clock = document.getElementById("time2");
  clock.innerHTML = `${hour}:${min}:${sec} ${timeZone}`;
}

let Time = document.getElementById("time");
let alarm = document.getElementsByClassName("alarm");
let set = document.getElementById("set");
let stop = document.getElementById("stop");
stop.style.display = "none";

Time.addEventListener("blur", () => {
  let regex = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/;
  let str = Time.value;
  if (regex.test(str)) {
    Time.classList.remove("is-invalid");
  } else {
    Time.classList.add("is-invalid");
  }
});

set.addEventListener("click", function ring(e) {
  e.preventDefault();
  let current_time = new Date();
  let set_time = new Date(Time.value);

  let TimeLeft = set_time - current_time;

  if (TimeLeft >= 0) {
    setTimeout(() => {
      stop.style.display = "inline";

      audio.play();
      audio.loop = true;
    }, TimeLeft);
  }
});

stop.addEventListener("click", function stopit() {
  audio.pause();
  setTimeout(() => {
    location.reload();
  }, 1500);
});

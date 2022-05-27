setInterval(time, 1000);

function time() {
  let clck = new Date();
  let hour = clck.getHours();
  let min = clck.getMinutes();
  let sec = clck.getSeconds();
  hour = hour - 12;
  let timeZone = "AM";
  if (hour) {
    timeZone = "PM";
  }
  let clock = document.getElementById("clock");
  clock.innerHTML = `${hour}:${min}:${sec} ${timeZone}`;
}

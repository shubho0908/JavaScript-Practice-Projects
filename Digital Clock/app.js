setInterval(time, 1000);

function time() {
  let clck = new Date();
  let hour = clck.getHours();
  let min = clck.getMinutes();
  let sec = clck.getSeconds();

  let timeZone = "AM";
  if (hour >= 12) {
    timeZone = "PM";
  }
  let clock = document.getElementById("clock");
  clock.innerHTML = `${hour}:${min}:${sec} ${timeZone}`;
}

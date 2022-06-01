setInterval(() => {
  d = new Date();
  hourtime = d.getHours();
  mintime = d.getMinutes();
  sectime = d.getSeconds();
  hourrotation = 30 * hourtime + mintime / 2;
  minrotation = 6 * mintime;
  secrotation = 6 * sectime;

  hours.style.transform = `rotate(${hourrotation}deg)`;
  minutes.style.transform = `rotate(${minrotation}deg)`;
  seconds.style.transform = `rotate(${secrotation}deg)`;
}, 1000);

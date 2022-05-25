let button = document.getElementById("generate");
let quote = document.getElementById("data");
button.addEventListener("click", function generate() {
  a = 1; //Min value
  b = 10; //Max Value
  let rand = a + (b - 1) * Math.random(); //Main Formula
  let rand2 = Math.round(rand);
  if (rand == 1) {
    quote.innerHTML = `“When you have a dream, you've got to grab it and never let go.”
      ~ <b>Carol Burnett</b>`;
  } else if (rand2 == 2) {
    quote.innerHTML = `“Nothing is impossible. The word itself says I'm possible!'”
      ~ <b>Audrey Hepburn</b>`;
  } else if (rand2 == 3) {
    quote.innerHTML = `“There is nothing impossible to they who will try.”
      ~ <b>Alexander the Great</b>`;
  } else if (rand2 == 4) {
    quote.innerHTML = `“The bad news is time flies. The good news is you're the pilot.”
      ~ <b>Michael Altshuler</b>`;
  } else if (rand2 == 5) {
    quote.innerHTML = `“Life has got all those twists and turns. You've got to hold on tight and off you go.”
      ~ <b>Nicole Kidman</b>`;
  } else if (rand2 == 6) {
    quote.innerHTML = `“Keep your face always toward the sunshine, and shadows will fall behind you.”
      ~ <b>Walt Whitman</b>`;
  } else if (rand2 == 7) {
    quote.innerHTML = `“Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.”
      ~ <b>Amal Clooney</b>`;
  } else if (rand2 == 8) {
    quote.innerHTML = `“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.”
      ~ <b>Duchess Meghan</b>`;
  } else if (rand2 == 9) {
    quote.innerHTML = `“I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened … it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.”
      ~ <b>Taylor Swift</b>`;
  } else if (rand2 == 10) {
    quote.innerHTML = `“Success is not final, failure is not fatal: it is the courage to continue that counts.”
      ~ <b>Winston Churchill</b>`;
  }
});

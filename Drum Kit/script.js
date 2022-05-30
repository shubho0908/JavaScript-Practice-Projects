document.body.addEventListener("keypress", (e) => {
  //   console.log("The key is pressed", e.key);
  if (e.key == "w") {
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
    document.querySelector(".w").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".w").classList.remove("pressed");
    }, 100);
  } else if (e.key == "a") {
    let kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    document.querySelector(".a").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".a").classList.remove("pressed");
    }, 100);
  } else if (e.key == "s") {
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
    document.querySelector(".s").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".s").classList.remove("pressed");
    }, 100);
  } else if (e.key == "d") {
    let tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    document.querySelector(".d").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".d").classList.remove("pressed");
    }, 100);
  } else if (e.key == "j") {
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    document.querySelector(".j").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".j").classList.remove("pressed");
    }, 100);
  } else if (e.key == "k") {
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    document.querySelector(".k").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".k").classList.remove("pressed");
    }, 100);
  } else if (e.key == "l") {
    let tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    document.querySelector(".l").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".l").classList.remove("pressed");
    }, 100);
  }
});

document.querySelector(".w").addEventListener("click", () => {
  let crash = new Audio("sounds/crash.mp3");
  crash.play();
  document.querySelector(".w").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".w").classList.remove("pressed");
  }, 100);
});

document.querySelector(".a").addEventListener("click", () => {
  let kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  document.querySelector(".a").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".a").classList.remove("pressed");
  }, 100);
});

document.querySelector(".s").addEventListener("click", () => {
  let snare = new Audio("sounds/snare.mp3");
  snare.play();
  document.querySelector(".s").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".s").classList.remove("pressed");
  }, 100);
});

document.querySelector(".d").addEventListener("click", () => {
  let tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  document.querySelector(".d").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".d").classList.remove("pressed");
  }, 100);
});

document.querySelector(".j").addEventListener("click", () => {
  let tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  document.querySelector(".j").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".j").classList.remove("pressed");
  }, 100);
});

document.querySelector(".k").addEventListener("click", () => {
  let tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  document.querySelector(".k").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".k").classList.remove("pressed");
  }, 100);
});

document.querySelector(".l").addEventListener("click", () => {
  let tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  document.querySelector(".l").classList.add("pressed");
  setTimeout(() => {
    document.querySelector(".l").classList.remove("pressed");
  }, 100);
});

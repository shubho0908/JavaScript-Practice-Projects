document.body.addEventListener("keypress", (e) => {
  if (e.key == "c" || e.key == "C") {
    let c_note = new Audio("Notes/piano_middle_C.mp3");
    c_note.play();
    document.querySelector(".b").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".b").classList.remove("pressed");
    }, 100);
  } else if (e.key == "d" || e.key == "D") {
    let d_note = new Audio("Notes/piano_D.mp3");
    d_note.play();
    document.querySelector(".a").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".a").classList.remove("pressed");
    }, 100);
  } else if (e.key == "d" || e.key == "D") {
    let d_note = new Audio("Notes/piano_D.mp3");
    d_note.play();
    document.querySelector(".a").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".a").classList.remove("pressed");
    }, 100);
  } else if (e.key == "e" || e.key == "E") {
    let e_note = new Audio("Notes/piano_E.mp3");
    e_note.play();
    document.querySelector(".g").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".g").classList.remove("pressed");
    }, 100);
  } else if (e.key == "f" || e.key == "F") {
    let f_note = new Audio("Notes/piano_F.mp3");
    f_note.play();
    document.querySelector(".f").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".f").classList.remove("pressed");
    }, 100);
  } else if (e.key == "g" || e.key == "G") {
    let g_note = new Audio("Notes/piano_G.mp3");
    g_note.play();
    document.querySelector(".e").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".e").classList.remove("pressed");
    }, 100);
  } else if (e.key == "a" || e.key == "A") {
    let a_note = new Audio("Notes/piano_A.mp3");
    a_note.play();
    document.querySelector(".d").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".d").classList.remove("pressed");
    }, 100);
  } else if (e.key == "b" || e.key == "B") {
    let b_note = new Audio("Notes/piano_B.mp3");
    b_note.play();
    document.querySelector(".c").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".c").classList.remove("pressed");
    }, 100);
  }

  //   Sharps
  else if (e.key == "1") {
    let csharp_note = new Audio("Notes/piano_C_sharp.mp3");
    csharp_note.play();
    document.querySelector(".as").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".as").classList.remove("pressed");
    }, 100);
  } else if (e.key == "2") {
    let dsharp_note = new Audio("Notes/piano_D_sharp.mp3");
    dsharp_note.play();
    document.querySelector(".gs").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".gs").classList.remove("pressed");
    }, 100);
  } else if (e.key == "3") {
    let fsharp_note = new Audio("Notes/piano_F_sharp.mp3");
    fsharp_note.play();
    document.querySelector(".fs").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".fs").classList.remove("pressed");
    }, 100);
  } else if (e.key == "4") {
    let gsharp_note = new Audio("Notes/piano_G_sharp.mp3");
    gsharp_note.play();
    document.querySelector(".ds").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".ds").classList.remove("pressed");
    }, 100);
  } else if (e.key == "5") {
    let asharp_note = new Audio("Notes/piano_A_sharp.mp3");
    asharp_note.play();
    document.querySelector(".cs").classList.add("pressed");
    setTimeout(() => {
      document.querySelector(".cs").classList.remove("pressed");
    }, 100);
  }
});

//Function to add the data to the local storage
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  let addTitle = document.getElementById("addTitle");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  newObj = {
    title: addTitle.value,
    text: addTxt.value,
  };

  notesObj.push(newObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";

  showNotes();
});

//Function to show notes
function showNotes() {}
let notes = localStorage.getItem("notes");
if (notes == null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
}

let html = "";
notesObj.forEach(function (element, index) {
  html += `<div class="notesCard" style="width: 18rem">
        <div class="card my-3">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="DeleteNote(this.id)" class="btn btn-primary my-4">Delete Note</button>
          </div>
        </div>
        </div>`;
});

let NotesElement = document.getElementById("notes");
if (notesObj.length != 0) {
  NotesElement.innerHTML = html;
} else {
  NotesElement.innerHTML = `Nothing to show here! Please Add a Note.`;
}

//Function to delete Notes

function DeleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//Function to search elements particularly inside each notes
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  inputValue = search.value;
  let notesCard = document.getElementsByClassName("notesCard");
  Array.from(notesCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    if (cardTxt.includes(inputValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

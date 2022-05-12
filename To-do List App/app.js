showLists();

//Function to make the "add" button work and save the entered data to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt");
  let list = localStorage.getItem("lists");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }
  listObj.push(addTxt.value);
  localStorage.setItem("lists", JSON.stringify(listObj));
  addTxt.value = "";
  showLists();
});

//Function to show all the created lists
function showLists() {
  let list = localStorage.getItem("lists");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }

  let dat = new Date();
  let html = "";
  listObj.forEach(function (element, index) {
    html += `<div class="notesCard">
    <div class="card my-5">
      <div class="card-body">
        <p class="card-text">${element} </p>
        <h6 id="date"> Created on ${dat.getDate()}/${dat.getMonth()}/${dat.getFullYear()} </h6>
        </br>
        <button id="${index}" onclick="Delete(this.id)" class="btn btn-primary">Delete</button>
      </div>
    </div>
    </div>`;
  });

  let listElement = document.getElementById("lists");
  if (listObj.length != 0) {
    listElement.innerHTML = html;
  } else {
    listElement.innerHTML = `You've no tasks pending! 📅`;
  }
}

//Function to delete the created Lists.
function Delete(index) {
  let list = localStorage.getItem("lists");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }

  listObj.splice(index, 1);
  localStorage.setItem("lists", JSON.stringify(listObj));
  showLists();
}

//Function to search for a particular Task
let search = document.getElementById("search");
search.addEventListener("input", function () {
  inputValue = search.value;
  let notesCard = document.getElementsByClassName("notesCard");
  Array.from(notesCard).forEach(function (element) {
    let CardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();

    if (CardTxt.includes(inputValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

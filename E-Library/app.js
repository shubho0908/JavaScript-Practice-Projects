showIssuedBooks();

//Function to make the "issueBtn" work and save the data to the local storage.
let issueBtn = document.getElementById("issueBtn");
let message = document.getElementById("message");
issueBtn.addEventListener("click", function () {
  let addTxt1 = document.getElementById("addTxt1");
  let addTxt2 = document.getElementById("addTxt2");
  let addTxt3 = document.getElementById("addTxt3");
  let data = localStorage.getItem("data");

  if (data == null) {
    dataObj = [];
  } else {
    dataObj = JSON.parse(data);
  }

  newObj = {
    name: addTxt1.value,
    bookName: addTxt2.value,
    author: addTxt3.value,
  };

  dataObj.push(newObj);

  if (addTxt1.value == "" || addTxt2.value == "" || addTxt3.value == "") {
    message.innerHTML = `<div
    id="success"
    class="alert alert-danger alert-dismissible fade show"
    role="alert"
  >
    <strong>Error!</strong> We couldn't issue this book, Please try again!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 4000);
  } else {
    message.innerHTML = `<div
    id="success"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    <strong>Success!</strong> Your book has been issued!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
    </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 4000);
    localStorage.setItem("data", JSON.stringify(dataObj));
    addTxt1.value = "";
    addTxt2.value = "";
    addTxt3.value = "";
    showIssuedBooks();
  }
});

//Function to show issued books

function showIssuedBooks() {
  let data = localStorage.getItem("data");

  if (data == null) {
    dataObj = [];
  } else {
    dataObj = JSON.parse(data);
  }

  let html = "";

  dataObj.forEach(function (element, index) {
    html += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${element.name}</td>
      <td>${element.bookName}</td>
      <td>${element.author}</td>
      <td>
        <button id="${index}" onclick="Return(this.id)" class="btn btn-primary return-book" type="submit">
          Return
        </button>
      </td>
    </tr>`;
  });

  let bookElement = document.getElementById("table-body");
  if (dataObj.length != 0) {
    bookElement.innerHTML = html;
  }
}

function Return(index) {
  location.reload();
  let data = localStorage.getItem("data");

  if (data == null) {
    dataObj = [];
  } else {
    dataObj = JSON.parse(data);
  }

  dataObj.splice(index, 1);

  localStorage.setItem("data", JSON.stringify(dataObj));
  showIssuedBooks();
}

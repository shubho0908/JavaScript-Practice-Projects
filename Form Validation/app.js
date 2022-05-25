let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let alert = document.getElementById("alert");
let address = document.getElementById("address");
let mssg = document.getElementById("mssg");

let userValid = "";
let mailValid = "";
let phoneValid = "";

username.addEventListener("blur", () => {
  let regex = /^[a-zA-Z][a-zA-Z0-9]{2,10}$/;
  let str = username.value;
  if (regex.test(str)) {
    username.classList.remove("is-invalid");
    console.log("Your username is valid");
    userValid = true;
  } else {
    username.classList.add("is-invalid");
    console.log("Your username is invalid");
    userValid = false;
  }
});

email.addEventListener("blur", () => {
  let regex = /^([a-zA-Z0-9\.\_\-]+)@([a-zA-Z]+)\.([a-zA-Z]+){2,6}$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    console.log("Your email is valid");
    mailValid = true;
  } else {
    email.classList.add("is-invalid");
    console.log("Your email is invalid");
    mailValid = false;
  }
});

phone.addEventListener("blur", () => {
  let regex = /^[0-9]{10}$/;
  let str = phone.value;
  if (regex.test(str)) {
    phone.classList.remove("is-invalid");
    console.log("Your phone is valid");
    phoneValid = true;
  } else {
    phone.classList.add("is-invalid");
    console.log("Your phone is invalid");
    phoneValid = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (userValid == false || mailValid == false || phoneValid == false) {
    alert.innerHTML = `<div
    id="success"
    class="alert alert-danger alert-dismissible fade show"
    role="alert"
  >
    <strong>Error!</strong> We couldn't submit this form, Please try again!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>`;
    setTimeout(function () {
      alert.innerHTML = "";
    }, 4000);
  } else {
    alert.innerHTML = `<div
    id="success"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    <strong>Success!</strong> Your form has been submitted successfully!
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
    </div>`;
    setTimeout(function () {
      alert.innerHTML = "";
    }, 4000);
    username.value = "";
    email.value = "";
    phone.value = "";
    mssg.value = "";
    address.value = "";
    setTimeout(function () {
      location.reload();
    }, 4000);
  }
});

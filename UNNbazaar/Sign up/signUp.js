const createButton = document.querySelector("#create-button");
const error = document.getElementsByClassName("error");
const errorImg = document.getElementsByClassName("errorImg");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const password = document.querySelector("#password");
var test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const email = document.querySelector("#email");

createButton.addEventListener("click", () => {
  if (firstName.value == "") {
    error[0].classList.add("active");
    errorImg[0].classList.add("active");
    firstName.classList.add("active");
  } else {
    error[0].classList.remove("active");
    errorImg[0].classList.remove("active");
    firstName.classList.remove("active");
  }
  if (lastName.value == "") {
    error[1].classList.add("active");
    errorImg[1].classList.add("active");
    lastName.classList.add("active");
  } else {
    error[1].classList.remove("active");
    errorImg[1].classList.remove("active");
    lastName.classList.remove("active");
  }
  if (email.value.match(test)) {
    error[2].classList.remove("active");
    errorImg[2].classList.remove("active");
    email.classList.remove("active");
  } else {
    error[2].classList.add("active");
    errorImg[2].classList.add("active");
    email.classList.add("active");
    email.placeholder = "email@example.com";
  }
  if (password.value == "") {
    error[3].classList.add("active");
    errorImg[3].classList.add("active");
    password.classList.add("active");
  } else {
    error[3].classList.remove("active");
    errorImg[3].classList.remove("active");
    password.classList.remove("active");
  }
  firstNameValue = firstName.value;
  lastNameValue = lastName.value;
  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value.match(test) &&
    password.value !== ""
  ) {
    alert(`Thank you ${firstNameValue} ${lastNameValue} for subscribing`);
    location.reload(true);
  } else {
    console.log("not subscribed");
  }
});
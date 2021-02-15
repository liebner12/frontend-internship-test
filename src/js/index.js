/* Here goes your JS code */

let popup = document.getElementsByClassName("popup");
let openPopup = document.getElementById("show-popup-form");
let closePopup = document.getElementById("close-popup-form");
let changeText = document.getElementById("show-thanks");

openPopup.addEventListener("click", () => {
  popup[0].classList.toggle("active");
});

closePopup.addEventListener("click", () => {
  popup[0].classList.toggle("active");
});

function validatePassword(password) {
  return password.length < 8 ? true : false;
}

function validateEmail(email) {
  return email != "" ? false : true;
}

function containsNumber(password) {
  return /\d/.test(password) ? false : true;
}

function validateForm() {
  let pass = document.forms["user-login"]["password"].value;
  let email = document.forms["user-login"]["email"].value;
  if (validatePassword(pass)) {
    alert("Hasło musi mieć co najmniej 8 znaków!");
    return false;
  }

  if (containsNumber(pass)) {
    alert("Hasło musi zawierać co najmniej jedną cyfrę!");
    return false;
  }

  if (validateEmail(email)) {
    alert("Pole E-mail nie może być puste.");
    return false;
  }

  changeText.classList.toggle("active");
  openPopup.classList.add("hidden");
  setInterval(function() {
    popup[0].classList.toggle("active");
  }, 3000);
}

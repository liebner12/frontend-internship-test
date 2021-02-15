/* Here goes your JS code */

let popup = document.getElementsByClassName("popup");
let openPopup = document.getElementById("show-popup-form");
let closePopup = document.getElementById("close-popup-form");

openPopup.addEventListener("click", () => {
  popup[0].classList.toggle("active");
});

closePopup.addEventListener("click", () => {
  popup[0].classList.toggle("active");
});

const navUser1 = document.querySelector(".btn-1");
const modal = document.querySelector(".js-modal");
const register = document.querySelector(".js-form");
const modalClose = document.querySelector(".js-modal-close");
const modalClose2 = document.querySelector(".js-modal2-close");

function showBuyTickets() {
  modal.classList.add("open");
}
function hideBuyTickets() {
  modal.classList.remove("open");
}
navUser1.addEventListener("click", showBuyTickets);
modalClose2.addEventListener("click", hideBuyTickets);
modalClose.addEventListener("click", hideBuyTickets);
register.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.getElementById("login-link").addEventListener("click", function () {
  document.querySelector(".login-pane.active").classList.remove("active");
  document.getElementById("login-pane").classList.add("active");
});

document.getElementById("register-link").addEventListener("click", function () {
  document.querySelector(".login-pane.active").classList.remove("active");
  document.getElementById("register-pane").classList.add("active");
});

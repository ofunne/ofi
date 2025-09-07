const authModal = document.querySelector(".auth-modal");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => authModal.classList.add("slide"));
loginLink.addEventListener("click", () => authModal.classList.remove("slide"));

const loginBtnModal = document.querySelector(".login-btn-modal");
const closeBtnModal = document.querySelector(".close-btn-modal");

if (loginBtnModal) loginBtnModal.addEventListener("click", () => {
  authModal.classList.toggle("show")
});

closeBtnModal.addEventListener("click", () => authModal.classList.remove("show", "slide"));

const profileBox = document.querySelector(".profile-box");
const profileCircle = document.querySelector(".profile-circle");
const dropdown = document.querySelector(".dropdown");

if (profileCircle) profileCircle.addEventListener("click", () => profileBox.classList.toggle("show"));

const alertBox = document.querySelector(".alert-box");

if (alertBox) {
  setTimeout(() => alertBox.classList.add("show"), 50);

  setTimeout(() => {
    alertBox.classList.remove("show");
    setTimeout(() => alertBox.remove(), 1000);
  }, 3000)
}

const balanceText = document.querySelector(".balance-text");

const cards = document.querySelector(".cards");
const cardContainer = document.querySelector(".container");
const balanceCard = document.querySelector(".balance-card");
const clickInfo = document.querySelector(".click-info");
const clickedInfo = document.querySelector(".clicked-info");
const notLoggedInfo = document.querySelector(".not-logged-info");

//const expansion = document.querySelector("#expansion");

if (balanceCard) balanceCard.addEventListener("click", ()=>{
  cards.classList.toggle("expanded");
  clickInfo.classList.toggle("expanded");
  clickedInfo.classList.toggle("expanded");
});

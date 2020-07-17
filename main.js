const toggleBtn = document.getElementById("toggle-btn");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modalContainer = document.getElementById("modal");

// show nav bar
toggleBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("shownav");
});

// open and close modal

open.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

close.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

window.addEventListener("click", (e) => {
  e.target.classList.contains("modal-container")
    ? (modalContainer.style.display = "none")
    : false;
});

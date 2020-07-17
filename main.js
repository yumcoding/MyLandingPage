const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("shownav");
});

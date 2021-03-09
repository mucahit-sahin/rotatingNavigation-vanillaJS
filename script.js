const openBt = document.querySelector("#open");
const closeBt = document.querySelector("#close");
const container = document.querySelector(".container");

openBt.addEventListener("click", () => {
  container.classList.add("openRotate");
});

closeBt.addEventListener("click", () => {
  container.classList.remove("openRotate");
});

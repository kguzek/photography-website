let menuVisible = false;

function toggleMenu(buttonElement) {
  console.log("toggle menu");
  menuVisible = !menuVisible;
  buttonElement.innerText = menuVisible ? "╳" : "☰";

  document.querySelector(".navbar").classList.toggle("hidden");
}

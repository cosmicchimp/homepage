const mediaQuery = window.matchMedia("(max-width: 600px)");
const aboutText = document.querySelector("#aboutText");
const mediaCheck = () => {
  if (mediaQuery.matches) {
    aboutText.innerHTML =
      "Hi, my name is CosmicChimp, have a look at some of my work.";
  } else {
    aboutText.innerHTML =
      "Hi, my name is CosmicChimp, I'm an aspiring web developer. I built this webpage entirely using my knowledge of HTML, CSS, and JavaScript.";
  }
};
window.addEventListener("resize", () => {
  mediaCheck();
});
mediaCheck();

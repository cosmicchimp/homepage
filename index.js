const mediaQuery = window.matchMedia("(max-width: 600px)");
const aboutText = document.querySelector("#aboutText");
const mediaCheck = () => {
  if (mediaQuery.matches) {
    aboutText.innerHTML =
      "Welcome mobile user, my name is CosmicChimp, have a look at some of my work below.";
  } else {
    aboutText.innerHTML =
      "Hi, my name is CosmicChimp, I'm an aspiring web developer. I built this webpage entirely using my knowledge of HTML, CSS, and JavaScript. Have a look at some of my work below.";
  }
};
window.addEventListener("resize", () => {
  mediaCheck();
});
mediaCheck();

//All of this is functionality to check for mobile/smaller screens and it will change the about text accordingly to fit the screen
const mediaQuery = window.matchMedia("(max-width: 600px)");
const aboutText = document.querySelector("#aboutText");
const mobileQuery = window.matchMedia("(max-width:900px)");
const mediaCheck = () => {
  if (mediaQuery.matches && !mobileQuery.matches) {
    aboutText.innerHTML =
      "Hi, my name is CosmicChimp, have a look at some of my work below.";
  } else {
    aboutText.innerHTML =
      "Hi, my name is CosmicChimp, I'm an aspiring web developer. I built this webpage entirely using my knowledge of HTML, CSS, and JavaScript. Have a look at some of my work below.";
  }
};
window.addEventListener("resize", () => {
  mediaCheck();
});
mediaCheck();

//image carousel functionality

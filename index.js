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
const sources = [
  "./assets/TicTacToeScreen.PNG",
  "./assets/BattleshipScreen.PNG",
  "./assets/TodoListScreen.PNG",
];
const links = [
  "https://cosmicchimp.github.io/Game_Projects/TicTacToe/",
  "https://github.com/cosmicchimp/Game_Projects/tree/main/BattleshipV2",
  "https://cosmicchimp.github.io/todo-list/",
];
let photoNum = -1;
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const carouselCircle1 = document.querySelector("#carouselCircle1");
const carouselCircle2 = document.querySelector("#carouselCircle2");
const carouselCircle3 = document.querySelector("#carouselCircle3");
let currentPhoto = document.querySelector(".carouselImage");
let photoLink = document.querySelector(".imageLink");
photoLink.href = links[0];
function nextPhoto() {
  let pastCircle = document.getElementById(`carouselCircle${photoNum}`);
  if (photoNum < 2) {
    photoNum++;
  } else {
    photoNum = 0;
  }
  photoLink.href = links[photoNum];
  currentPhoto.src = sources[photoNum];
  let currentCircle = document.getElementById(`carouselCircle${photoNum}`);
  currentCircle.style.fill = "black";
  pastCircle.style.fill = "none";
}
nextButton.addEventListener("click", () => {
  nextPhoto();
});

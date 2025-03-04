// Function to check for mobile/smaller screens and update about text accordingly
const mediaQuery = window.matchMedia("(max-width: 600px)");
const aboutText = document.querySelector("#aboutText");
const mobileQuery = window.matchMedia("(max-width: 900px)");

const mediaCheck = () => {
  if (mediaQuery.matches) {
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
mediaCheck(); // Ensure it runs on page load

// Image carousel functionality
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

let photoNum = 0; // Start the photo number from 0
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const carouselCircle1 = document.querySelector("#carouselCircle1");
const carouselCircle2 = document.querySelector("#carouselCircle2");
const carouselCircle3 = document.querySelector("#carouselCircle3");
let currentPhoto = document.querySelector(".carouselImage");
let photoLink = document.querySelector(".imageLink");

// Set initial photo link
photoLink.href = links[photoNum];
carouselCircle0.style.fill = "black";
function nextPhoto() {
  let pastCircle = document.getElementById(`carouselCircle${photoNum}`);

  // Update photoNum and cycle through the images
  if (photoNum < 2) {
    photoNum++;
  } else {
    photoNum = 0;
  }

  // Update the photo and link
  photoLink.href = links[photoNum];
  currentPhoto.src = sources[photoNum];
  nextButton.style.transform = "translateX(20px)";
  nextButton.style.transform = "translateX(0px)";
  // Update the carousel circle fill color
  let currentCircle = document.getElementById(`carouselCircle${photoNum}`);
  if (pastCircle) pastCircle.style.fill = "none"; // Ensure past circle is reset
  currentCircle.style.fill = "black"; // Highlight the current circle

  // Animate the button with scaling effect
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  nextPhoto();
});

// Automatically change the photo every 3 seconds
setInterval(() => {
  nextPhoto();
}, 3000);

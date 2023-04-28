const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
let currentIndex = 76;
const width = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      currentIndex--;
      break;
    case "ArrowRight":
      currentIndex++;
      break;
    case "ArrowUp":
      currentIndex -= width;
      break;
    case "ArrowDown":
      currentIndex += width;
  }

  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);

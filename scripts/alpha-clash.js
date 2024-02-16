function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

  if (playerPressed === expectedAlphabet) {
    console.log("right");
    removeBgColorById(expectedAlphabet);

    continueGame();
  } else {
    console.log("wrong");
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  const alphabet = getRandomAlphabet();

  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  setBgColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");

  continueGame();
}

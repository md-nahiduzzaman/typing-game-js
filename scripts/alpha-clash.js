function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

  if (playerPressed === expectedAlphabet) {
    console.log("right");
    removeBgColorById(expectedAlphabet);

    const currentScore = getTextElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElementById("current-score", updateScore);

    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updateLife = currentLife - 1;
    setTextElementById("current-life", updateLife);

    if (updateLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function gameOver() {
  hideElementById("home-screen");
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("current-score");
  setTextElementById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  removeBgColorById(currentAlphabet);
}

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

  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  continueGame();
}

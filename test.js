var t;
function increment() {
  score++;
  scoreDisplay.textContent = score;
}

function autoClick() {
  t =setTimeout(autoClick, 1000);

}

function stopAutoClick() {
    clearTimeout(t);
}

////////////////////////////////////////////////////////////////////

if (score === 10) {
  freeAutoClick = true;
  console.log(freeAutoClick);
} else if (score === 30 || score != 10) {
  freeAutoClick = false;
  console.log(freeAutoClick);
clearInterval(x);
}

 if (freeAutoClick == true) {
  setInterval(function () {
    score++;
    scoreDisplay.textContent = score;
  }, 1000);
} else if (score === 30 && freeAutoClick == false) {
  clearInterval(x);
}

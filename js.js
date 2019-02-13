// IMPORTANT VARIABLES FOR THE GAME
var cookie = document.getElementById("cookie"); // COOKIE INCREMENTER.
var scoreDisplay = document.getElementById("affichage"); // COOKIE SCORE DISPLAY.
var autoClickButton = document.getElementById("autoclick"); // AUTOCLICK BUTTON.
var multiplierButton = document.getElementById("multiplier"); // MULTIPLIER BUTTON.
var bonusButton = document.getElementById("bonus"); // BONUS BUTTON.
var price = [500, 5000]; // PRICES OF THE BONUS AND AUTOCLICK, USELESS.
var hasAutoClick = false; // VARIABLE WHICH CONTROLS IF THE AUTOCLICK HAS BEEN BOUGHT OR NOT.
var hasBonus = false; // VARIABLE WHICH CONTROLS IF THE BONUS HAS BEEN BOUGHT OR NOT.
var freeAutoClick = false; // VARIABLE WHICH CONTROLS IF THE FREE AUTOCLICK IS ON OR NOT.
var score = 0; // THE ACTUAL SCORE THAT APPEARS ABOVE THE COOKIE.

var t; // GLOBAL VARIABLE USED IN THE AUTOCLICK FUNCTION.

function increment() { // THE INCREMENT PART OF THE AUTOCLICK FUNCTION.
  score++;
  scoreDisplay.textContent = score; // THE HTML ELEMENT WHERE THE SCORE APPEARS.
}

function autoClick() { // THE TIMED PART OF THE AUTOCLICK FUNCTION. WRITE autoClick() TO CALL THE AUTOCLICK.
  t = setInterval(increment, 1000);
}

function stopAutoClick() { // CALL THIS FUNCTION TO STOP THE AUTOCLICK.
  clearInterval(t);
}

autoClickButton.style.opacity = "0.2"; // BASE OPACITY OF THE AUTOCLICK BUTTON.
bonusButton.style.opacity = "0.2"; // BASE OPACITY OF THE BONUS BUTTON.
multiplierButton.style.opacity = "0.2"; // BASE OPCAITY OF THE MULTIPLIER BUTTON.

// SQUISH EFFECT
cookie.addEventListener("mousedown", function() {
  cookie.style.width = "285px";
  //cookie.style.height = "290px";
})

cookie.addEventListener("mouseup", function() {
  cookie.style.width = "300px";
  cookie.style.height = "300px";
})

// MULTIPLICATEUR (must add a true/false checker for the Bonus)
var multiplicateur = 1;
var multiplierPrice = 10;
multiplierButton.addEventListener("click", function augmenteMultiplicateur() {

  if (score >= multiplierPrice && score > 0) {
    score -= multiplierPrice;
    scoreDisplay.textContent = score;
    multiplierPrice *= 2;
    console.log(multiplierPrice);
    multiplicateur++;
    multiplierButton.textContent = "Multiplicateur: x" + multiplicateur + " Prix: " + multiplierPrice + " Cookies";
  } else if (score < multiplierPrice) {
    console.log("You don't have enough cookies!");
  }

  (score >= multiplierPrice) ? multiplierButton.style.opacity = "1": multiplierButton.style.opacity = "0.2";
});

// SCORE KEEPER

cookie.addEventListener("click", function() {
  if (multiplicateur === 1 && multiplicateur != 0) {
    score = (score + 1) * multiplicateur; ///// DEFAULT CLICK VALUE IF NO MULTIPLIER HAS BEEN BOUGHT.//
  } else if (multiplicateur > 1) {
    score = score + multiplicateur; ///// CLICK VALUE IF AT LEAST ONE MULTIPLIER HAS BEEN BOUGHT.//
  }

  var imgArray = ["1.jpg", "2.png", "3.jpg", "4.png", "darth.jpg", "freddie.jpg", "jojo.png", "o.png"];
  var rand = Math.floor(Math.random() * 8);
  cookie.src = imgArray[rand];

  ///// IF BONUS IS ACTIVATED IT ADDS ONE MORE CLICK VALUE (200%)//
  if (hasBonus === true) {
    score = score + multiplicateur;
  }
  scoreDisplay.textContent = score;

  ///// BUTTON OPACITY CHECKER
  (score >= 5000 && bonusButton === false) ? bonusButton.style.opacity = "1": bonusButton.style.opacity = "0.2";
  (score >= 500 && hasAutoClick === false) ? autoClickButton.style.opacity = "1": autoClickButton.style.opacity = "0.2";
  (score >= multiplierPrice) ? multiplierButton.style.opacity = "1": multiplierButton.style.opacity = "0.2";

  if (score === 200) {
    freeAutoClick = true;
    console.log(freeAutoClick);
  } else if (score === 500 || score != 200) {
    freeAutoClick = false;
    console.log(freeAutoClick);
  }

  if (freeAutoClick == true) {
    autoClick()
  } else if (score >= 500 && freeAutoClick == false) {
    stopAutoClick();
  }
});

// FREE AUTOCLICK CANCEL

cookie.addEventListener("mousemove", function() {
  if (score === 200) {
    freeAutoClick = true;
    console.log(freeAutoClick);
  } else if (score === 500 || score != 200) {
    freeAutoClick = false;
    console.log(freeAutoClick);
  }

  if (freeAutoClick == true) {
    autoClick()
  } else if (score >= 500 && freeAutoClick == false) {
    stopAutoClick();
  }
});

// AUTOCLICK BUTTON (BECOMES ACTIVE AT 500 COOKIES AND THEN, IF BOUGHT, BECOMES TOGGLED OFF)

autoClickButton.addEventListener("click", function() {
  if (score >= 500 && hasAutoClick === false) {
    score -= 500;
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    autoClickButton.disabled = true;
    autoClickButton.textContent = "Auto Click - Purchased";
    hasAutoClick = true;
  } else if (score < 500 && hasAutoClick === false) {
    alert("You don't have enough cookies!");
  }

  (score >= 500 && hasAutoClick === false) ? autoClickButton.style.opacity = "1": autoClickButton.style.opacity = "0.2";
})

// BONUS BUTTON (It must be bought at 500 / the value of one click change : 200% during 30sc / A timer of 30 sec must activate )

// BONUS FUNCTION
bonusButton.addEventListener("click", function() {
  if (score >= 10) {
    score -= 10;
    timer();
    hasBonus = true;
    bonusButton.disabled = true;
  } else if (score <= 10) {
    alert("Tu n'as pas assez de cookies!");
  }
});

/* BONUS TIMER BAR + BONUS TIMER COUNTDOWN INSIDE THE BUTTON
function timerTime() {
  scoreDisplay.textContent = score;
  var timeleft = 30;
  var timer = setInterval(timerBar, 1000);
    function timerBar() {
    document.getElementById("progressBar").value = 31 - timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      hasBonus = false;
      clearInterval(timer);
      document.getElementById("progressBar").value = 0;
      bonusButton.textContent = "Bonus - 5000 Cookies";
    }
  }
};*/

function timer() {
  scoreDisplay.textContent = score;
  var timeLeft = 30;
  var timerId = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft == 0) {
      hasBonus = false;
      clearInterval(timerId);
      document.getElementById("progressBar").value = 0;
      bonusButton.textContent = "Bonus - 5000 Cookies";
    } else {
      bonusButton.textContent = timeLeft;
      document.getElementById("progressBar").value = 30 - timeLeft;
      timeLeft--;
    }
  }
};

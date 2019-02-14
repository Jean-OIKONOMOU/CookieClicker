// IMPORTANT VARIABLES FOR THE GAME
var cookie = document.getElementById("cookie"); // COOKIE INCREMENTER.
var scoreDisplay = document.getElementById("affichage"); // COOKIE SCORE DISPLAY.
var autoClickButton = document.getElementById("autoclick"); // AUTOCLICK BUTTON.
var multiplierButton = document.getElementById("multiplier"); // MULTIPLIER BUTTON.
var bonusButton = document.getElementById("bonus"); // BONUS BUTTON.
var price = [500, 5000]; // PRICES OF THE BONUS AND AUTOCLICK, USELESS VARIABLE.
var hasAutoClick = false; // VARIABLE WHICH CONTROLS IF THE AUTOCLICK HAS BEEN BOUGHT OR NOT.
var hasBonus = false; // VARIABLE WHICH CONTROLS IF THE BONUS HAS BEEN BOUGHT OR NOT.
var freeAutoClick = false; // VARIABLE WHICH CONTROLS IF THE FREE AUTOCLICK IS ON OR NOT.
var score = 0; // THE ACTUAL SCORE THAT APPEARS ABOVE THE COOKIE.
// CANVAS GLOBAL VARIABLES.
var canvas;
var canvas2;
var cookieClk;
var ctx;
var ctx2;
var ctx3;

window.onload = function() {
  canvas = document.getElementById("canvasArea");
  ctx = canvas.getContext("2d");
  canvas2 = document.getElementById("canvasArea2");
  ctx2 = canvas2.getContext("2d");
  cookieClk = document.getElementById("cookie");
  ctx3 = cookieClk.getContext("2d");
  cookieClk.addEventListener("mousedown", onDown, false);
}

function onDown(event) {
  cx = event.pageX;
  cy = event.pageY;
}

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
  cookie.style.width = "180px";
})

cookie.addEventListener("mouseup", function() {
  cookie.style.width = "190px";
  cookie.style.height = "190px";
})

// MULTIPLICATOR
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

  /*  COOKIE IMAGE RANDOMIZER
    var imgArray = ["1.jpg", "2.png", "3.jpg", "4.png", "darth.jpg", "freddie.jpg", "jojo.png", "o.png", ];
    var rand = Math.floor(Math.random() * 8);
    cookie.src = imgArray[rand]; */

  ///// IF BONUS IS ACTIVATED IT ADDS ONE MORE CLICK VALUE (200%)//
  if (hasBonus === true) {
    score = score + multiplicateur;
  }
  scoreDisplay.textContent = score;

  ///// BUTTON OPACITY CHECKER
  (score >= 5000 && bonusButton === false) ? bonusButton.style.opacity = "1": bonusButton.style.opacity = "0.2";
  (score >= 500 && hasAutoClick === false) ? autoClickButton.style.opacity = "1": autoClickButton.style.opacity = "0.2";
  (score >= multiplierPrice) ? multiplierButton.style.opacity = "1": multiplierButton.style.opacity = "0.2";

  if (score === 10) {
    freeAutoClick = true;
    console.log(freeAutoClick);
  } else if (score === 30 || score != 10) {
    freeAutoClick = false;
    console.log(freeAutoClick);
  }

  if (freeAutoClick == true) {
    autoClick()
  } else if (score >= 30 && freeAutoClick == false) {
    stopAutoClick();
  }
});

cookie.addEventListener("click", function drawCircle(size, xPos, Ypos, colour) {
  var xPos = Math.floor(Math.random() * 301);
  var yPos = Math.floor(Math.random() * 131);
  var size = Math.floor(Math.random() * 101);
  var angle = Math.floor(Math.random() * 401);
  var colour = '#' + Math.random().toString(16).substr(2, 6);

  ctx.beginPath();
  ctx.arc(xPos, yPos, size, angle, 2 * Math.PI);
  ctx.fillStyle = colour;
  ctx.fill();
})

cookie.addEventListener("click", function drawCircle(size, xPos, Ypos, colour) {
  var xPos = Math.floor(Math.random() * 601);
  var yPos = Math.floor(Math.random() * 131);
  var size = Math.floor(Math.random() * 101);
  var angle = Math.floor(Math.random() * 401);
  var colour = '#' + Math.random().toString(16).substr(2, 6);

  ctx2.beginPath();
  ctx2.arc(xPos, yPos, size, angle, 2 * Math.PI);
  ctx2.fillStyle = colour;
  ctx2.fill();
})

// COOKIES !
cookie.addEventListener("click", function drawCircle(size, xPos, Ypos, colour) {

  var xPos1 = Math.random() * 5;
  var yPos1 = Math.random() * 5;

  ctx3.beginPath();
  ctx3.strokeStyle = "#000000"
  ctx3.arc(cookieClk.width / xPos1, cookieClk.height / yPos1, 10, 0, 2 * Math.PI);
  ctx3.fillStyle = "#a75000";
  ctx3.fill();
  ctx3.stroke();
})

// FREE AUTOCLICK CANCEL
refreshScore()

function refreshScore() {
  setInterval(function() {
    scoreDisplay.textContent = score;
    console.log(score);
    if (score == 5) {
      console.log("heya");
    } else if (score == 10) {
      console.log("bluh")
    }
    /*if (score === 10) {
      freeAutoClick = true;
      console.log(freeAutoClick);
    } else if (score === 30 || score != 10) {
      freeAutoClick = false;
      console.log(freeAutoClick);
    }

    if (freeAutoClick == true) {
      autoClick()
    } else if (score >= 30 && freeAutoClick == false) {
      stopAutoClick();
    }*/
  }, 50);
}

//cookie.addEventListener("mousemove",
function cancel() {

  if (score >= 10) {
    freeAutoClick = true;
    console.log(freeAutoClick);
  } else if (score === 30 || score != 10) {
    freeAutoClick = false;
    console.log(freeAutoClick);
  }

  if (freeAutoClick == true) {
    autoClick()
  } else if (score >= 30 && freeAutoClick == false) {
    stopAutoClick();
  }
}
//);

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
  if (score >= 5000) {
    score -= 5000;
    timer();
    hasBonus = true;
    bonusButton.disabled = true;
  } else if (score <= 5000) {
    alert("You don't have enough cookies!");
  }
});

// BONUS TIMER
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
      bonusButton.disabled = false;
    } else {
      bonusButton.textContent = timeLeft;
      document.getElementById("progressBar").value = 30 - timeLeft;
      timeLeft--;
    }
  }
};

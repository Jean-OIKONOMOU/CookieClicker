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

// CANVAS GLOBAL VARIABLES AND INTERACTION TOKENS.
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

// FREE AUTOCLICK -> NEEDS TO BE DISABLED WHEN AUTOCLICK IS BOUGHT
function autoClick() { // THE TIMED PART OF THE AUTOCLICK FUNCTION. WRITE autoClick() TO CALL THE AUTOCLICK.
  var final = setInterval(function() {
    if (score >= 200 && score <= 499 && hasAutoClick === false) {
      score++
      scoreDisplay.textContent = score;
    } else if (hasAutoClick === true) {
      clearInterval(final);
    }
  }, 1000);
};
autoClick();

function opacityBonusButtonCheck() { // THE TIMED PART OF THE AUTOCLICK FUNCTION. WRITE autoClick() TO CALL THE AUTOCLICK.
  var opacity = setInterval(function() {
scoreDisplay.textContent = score;
    if (score >= 5000 && hasBonus == false) {
      scoreDisplay.textContent = score;
      bonusButton.style.opacity = "1";
    } else if (score < 5000 || hasBonus == true) {
      scoreDisplay.textContent = score;
      bonusButton.style.opacity = "0.2";
    }
  }, 50);
};
opacityBonusButtonCheck();

function opacityMultiplierButtonCheck() { // THE TIMED PART OF THE AUTOCLICK FUNCTION. WRITE autoClick() TO CALL THE AUTOCLICK.
  var opac = setInterval(function() {
    if (score >= multiplierPrice) {
      multiplierButton.style.opacity = "1";
    //  bonusButton.style.opacity = "0.2";
      scoreDisplay.textContent = score;
    } else if (score <= multiplierPrice) {
      multiplierButton.style.opacity = "0.2";
      scoreDisplay.textContent = score;
    }
  }, 50);
};
opacityMultiplierButtonCheck()

function opacityAutoclickButtonCheck() { // THE TIMED PART OF THE AUTOCLICK FUNCTION. WRITE autoClick() TO CALL THE AUTOCLICK.
  var opac2 = setInterval(function() {
    if (score >= 500 && hasAutoClick === false) {
      bonusButton.style.opacity = "1"
      multiplierButton.style.opacity = "0.2";
    //  bonusButton.style.opacity = "0.2";
      scoreDisplay.textContent = score;
    } else if (score <= multiplierPrice) {
      multiplierButton.style.opacity = "1";
      scoreDisplay.textContent = score;
    }
  }, 50);
};
opacityMultiplierButtonCheck()

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
    alert("You don't have enough cookies!");
  }

});

// SCORE KEEPER
cookie.addEventListener("click", function() {
  if (multiplicateur === 1 && multiplicateur != 0) {
    score = (score + 1) * multiplicateur; //// DEFAULT CLICK VALUE IF NO MULTIPLIER HAS BEEN BOUGHT.
  } else if (multiplicateur > 1) {
    score = score + multiplicateur; //// CLICK VALUE IF AT LEAST ONE MULTIPLIER HAS BEEN BOUGHT.
  }

  //// IF BONUS IS ACTIVATED IT ADDS ONE MORE CLICK VALUE (200%)//
  if (hasBonus === true) {
    score = score + multiplicateur;
  }
  scoreDisplay.textContent = score;

  //// BUTTON OPACITY CHECKER
//  (score >= 10 && hasAutoClick === false) ? autoClickButton.style.opacity = "1": autoClickButton.style.opacity = "0.2";

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
});

// AUTOCUCK BUTTON (BECOMES ACTIVE AT 500 COOKIES AND THEN, IF BOUGHT, BECOMES TOGGLED OFF)

autoClickButton.addEventListener("click", function() {
  if (score >= 500 && hasAutoClick === false) {
    autoClickButton.style.opacity = "1"
    score -= 500;
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    autoClickButton.disabled = true;
    bonusButton.style.opacity = "0.2";
    autoClickButton.textContent = "Auto Click - Purchased";
    hasAutoClick = true;
  } else if (score < 500 && hasAutoClick === false) {
    alert("You don't have enough cookies!");
  };
})

// BONUS BUTTON (It must be bought at 500 / the value of one click change : 200% during 30sc / A timer of 30 sec must activate )

// BONUS FUNCTION
bonusButton.addEventListener("click", function() {
  if (score >= 5000) {
    score -= 5000;
    timer();
    hasBonus = true;
    bonusButton.disabled = true;
    bonusButton.style.opacity = "0.2";
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

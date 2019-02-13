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

// SKINS
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");

// CHANGE COOKIE SKIN ON CLICK (must add unlockables if score is higher than X)
a.addEventListener("click", function() {
  cookie.src = "1.jpg";
});

b.addEventListener("click", function() {
  cookie.src = "2.png";
});

c.addEventListener("click", function() {
  cookie.src = "3.jpg";
});

d.addEventListener("click", function() {
  cookie.src = "4.png";
});

e.addEventListener("click", function() {
  cookie.src = "darth.jpg";
});

f.addEventListener("click", function() {
  cookie.src = "freddie.jpg";
});

g.addEventListener("click", function() {
  cookie.src = "o.png";
});

h.addEventListener("click", function() {
  cookie.src = "jojo.png";
});

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
    score = (score + 1) * multiplicateur; // DEFAULT CLICK VALUE IF NO MULTIPLIER HAS BEEN BOUGHT.
  } else if (multiplicateur > 1) {
    score = score + multiplicateur; // CLICK VALUE IF AT LEAST ONE MULTIPLIER HAS BEEN BOUGHT.
  }

  // IF BONUS IS ACTIVATED IT ADDS ONE MORE CLICK VALUE
  if (hasBonus === true) {
    score = score + multiplicateur;
  }
  scoreDisplay.textContent = score;

  // BUTTON OPACITY CHECKER
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

// BONUS TIMER BAR (Bonus code is missing + add numerical timer)

bonusButton.addEventListener("click", function() {
  var timeleft = 30;
  var timer = setInterval(function() {
    document.getElementById("progressBar").value = 31 - timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("progressBar").value = 0;
    }
  }, 1000);
})

// AUTOCLICK BUTTON (BECOMES ACTIVE AT 500 COOKIES AND THEN, IF BOUGHT, BECOMES TOGGLES OFF)

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

//// Fonction bonus enlever le prix et appeller fonction du nouveau prix clic
bonusButton.addEventListener("click", function() {
  if (score >= 10) {
    score -= 10;
    timerTime();
    hasBonus = true;
  } else if (score <= 10) {
    alert("Tu n'as pas assez de cookies!");
  }
});

//// TIMER POUR BONUS
function timerTime() {
  scoreDisplay.textContent = score;
  var timeleft = 30;
  var timer = setInterval(function() {
    bonusButton.textContent = "Bonus - Purchased";
    document.getElementById("progressBar").value = 31 - timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      hasBonus = false;
      clearInterval(timer);
      document.getElementById("progressBar").value = 0;
    }
  }, 1000);
};

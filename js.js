// IMPORTANT VARIABLES FOR THE GAME
var cookie = document.getElementById("cookie");
var scoreDisplay = document.getElementById("affichage");
var autoClickButton = document.getElementById("autoclick");
var multiplierButton = document.getElementById("multiplier");
var bonusButton = document.getElementById("bonus");
var price = [500, 5000];
var hasAutoClick = false;
var hasBonus = false;
autoClickButton.style.opacity = "0.2";
bonusButton.style.opacity = "0.2";
multiplierButton.style.opacity = "0.2";

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
var score = 0;
cookie.addEventListener("click", function() {
  if (multiplicateur === 1 && multiplicateur != 0) {
    score = (score + 1) * multiplicateur;
  } else if (multiplicateur > 1) {
    score = score + multiplicateur;
  }
  scoreDisplay.textContent = score;

  (score >= 5000 && bonusButton === false) ? bonusButton.style.opacity = "1": bonusButton.style.opacity = "0.2";
  (score >= 500 && hasAutoClick === false) ? autoClickButton.style.opacity = "1": autoClickButton.style.opacity = "0.2";
  (score >= multiplierPrice) ? multiplierButton.style.opacity = "1": multiplierButton.style.opacity = "0.2";

  var freeAutoClick = false;

  if (score === 10) {
    freeAutoClick=true;
    console.log("ok");
  } else if (score === 20) {
    freeAutoClick=false;
    console.log("pas ok");
  };

  console.log(freeAutoClick);

  if (freeAutoClick === true) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
  }

  /* while (score >= 200 && score <= 500) {
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000)
  }
  /* (cookie.src = "jojo.png") ?
   var a = parseInt(scoreDisplay.textContent, 10);
  console.log(score);
  console.log(scoreDisplay.textContent); */
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

// AUTOCLICK BUTTON (must activate for free at 200 cookies then desactivates at 500 where it must be bought)

autoClickButton.addEventListener("click", function() {
  // if (score <= 500) {autoClickButton.disabled = true;} else if
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

//  (score >= 500 && hasAutoClick === false) ? autoClickButton.style.opacity = "1": autoClickButton.style.opacity = "0.2";
})

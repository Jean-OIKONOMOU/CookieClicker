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

// CHANGE COOKIE SKIN ON CLICK
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

// MULTIPLICATEUR
multiplicateur = 1;
multiplierButton.addEventListener("click", function augmenteMultiplicateur(){
var multiplierPrice = 50;
  if (score >= multiplierPrice) {
    multiplierPrice *= 2;
    multiplicateur++;
    multiplierButton.textContent = "Multiplicateur - x" + multiplicateur + "";
  } else if (score < price[0] && hasAutoClick === false) {
    alert("You don't have enough cookies!");
  }
  console.log("ola");
});

// SCORE KEEPER
var score = 0;

cookie.addEventListener("click", function() {
  if (multiplicateur === 1 && multiplicateur != 0) {
    score = (score+1)*multiplicateur;
  } else if (multiplicateur>1) {
    score = score+multiplicateur;
  }

  scoreDisplay.textContent = score;
  // BUTTON FADE OUT
  (score >= 10 && bonusButton === false) ? autoClickButton.style.opacity = "1" : autoClickButton.style.opacity = "0.2";
  (score >= 10 && hasAutoClick === false) ? autoClickButton.style.opacity = "1" : autoClickButton.style.opacity = "0.2";
  // (cookie.src = "jojo.png") ?
  /* var a = parseInt(scoreDisplay.textContent, 10);
  console.log(score);
  console.log(scoreDisplay.textContent); */
})


bonusButton.addEventListener("click", function () {
  var timeleft = 30;
  var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 31 - timeleft;
  timeleft -= 1;
  if(timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("progressBar").value = 0;
  }
}, 1000);

})

//window.onload = function() {};
// JAVASCRIPT FOR THE MULTIPLIER AND AUTOCLICK BUTTONS

autoClickButton.addEventListener("click", function() {
  if (score >= price[0] && hasAutoClick === false) {
    score -= price[0];
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    autoClickButton.disabled = true;
    autoClickButton.textContent = "Auto Click - Purchased";
    hasAutoClick = true;
  } else if (score < price[0] && hasAutoClick === false) {
    alert("You don't have enough cookies!");
  }
})

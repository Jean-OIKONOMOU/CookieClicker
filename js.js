// IMPORTANT VARIABLES FOR THE GAME
var cookie = document.getElementById("cookie");
var scoreDisplay = document.getElementById("affichage");
var autoClick = document.getElementById("autoclick");
var price = [500, 5000, 50];
var hasAutoClick = false;

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

// SCORE KEEPER
var score = 0;

cookie.addEventListener("click", function() {
  score++;
  scoreDisplay.textContent = score;
  // BUTTON FADE OUT
  (score <= 10 && hasAutoClick === false) ? autoClick.style.opacity = "0.5": autoClick.style.opacity = "1";
  // (cookie.src = "jojo.png") ?
  /* var a = parseInt(scoreDisplay.textContent, 10);
  console.log(score);
  console.log(scoreDisplay.textContent); */
})

//window.onload = function() {};
// JAVASCRIPT FOR THE MULTIPLIER AND AUTOCLICK BUTTONS

autoClick.addEventListener("click", function() {

  if (score >= 10 && hasAutoClick === false) {
    score -= 10;
    setInterval(function() {
      score++;
      scoreDisplay.textContent = score;
    }, 1000);
    autoClick.disabled = true;
    autoClick.textContent = "Auto Click - Purchased";
    hasAutoClick = true;
  } else if (score < 10 && hasAutoClick === false) {
    alert("You don't have enough cookies!");
  }
})

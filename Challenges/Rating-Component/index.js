const onea = document.getElementById("onea");
const twoa = document.getElementById("twoa");
const threea = document.getElementById("threea");
const foura = document.getElementById("foura");
const fivea = document.getElementById("fivea");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const submitRatingBtn = document.getElementById("submit-rating");

const howWeDid = document.getElementById("howdidwedo");
const thankYou = document.getElementById("thankyou");
const selectedRatingEl = document.getElementById("selected-rating");

let selectedRating = 0;

const ratingEls = [onea, twoa, threea, foura, fivea];
onea.addEventListener("click", function(){ rating(onea); });
onea.addEventListener("mouseover", function(){ hoverOver(one, onea); });
onea.addEventListener("mouseout", function(){ hoverOut(one, onea); });

twoa.addEventListener("click", function(){ rating(twoa); });
twoa.addEventListener("mouseover", function(){ hoverOver(two, twoa); });
twoa.addEventListener("mouseout", function(){ hoverOut(two, twoa); });

threea.addEventListener("click", function(){ rating(threea); });
threea.addEventListener("mouseover", function(){ hoverOver(three, threea); });
threea.addEventListener("mouseout", function(){ hoverOut(three, threea); });

foura.addEventListener("click", function(){ rating(foura); });
foura.addEventListener("mouseover", function(){ hoverOver(four, foura); });
foura.addEventListener("mouseout", function(){ hoverOut(four, foura); });

fivea.addEventListener("click", function(){ rating(fivea); });
fivea.addEventListener("mouseover", function(){ hoverOver(five, fivea); });
fivea.addEventListener("mouseout", function(){ hoverOut(five, fivea); });

submitRatingBtn.addEventListener("click", function(){ 
  if (selectedRating) {
    howWeDid.style.display = "none";
    thankYou.style.display = "block";
    selectedRatingEl.textContent = selectedRating;
  }
});

function rating(rated) {
  let temp = ratingEls.map(x => {
    if (x == rated) {
      x.style.background = "hsl(25, 97%, 53%)";
    } else {
      x.style.background = "rgba(255, 255, 255, 0.05)";
    }
  });
  selectedRating = rated.textContent;
  console.log(selectedRating);
}
function hoverOver(input, label) {
  if (!input.checked) {
    label.style.background = "hsl(217, 12%, 63%)";
  }
}
function hoverOut(input, label) {
  if (!input.checked) { 
    label.style.background = "rgba(255, 255, 255, 0.05)";
  }
}
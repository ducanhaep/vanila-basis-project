const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  //get random number between 0 and 4
  const randomNumber = getRndNumber(0, 4);
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRndNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  let hexColor = "#";
  let i = 0;

  while (i < 6) {
    hexColor += hex[getRndNumber(0, hex.length)];
    i++;
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

const getRndNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

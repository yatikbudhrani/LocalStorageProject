let body = document.querySelector("body");
let textArea = document.getElementById("textArea");
let textAreaDiv = document.getElementById("textAreaDiv");
let changeThemeBtn = document.getElementById("changeTheme");
let clearBtn = document.getElementById("clearBtn");
let textAreaValue = textArea.value;

textArea.addEventListener("keydown", () => {
  textAreaValue = textArea.value;
  localStorage.setItem("value", textAreaValue);
});

window.addEventListener("load", () => {
  textArea.innerText = localStorage.getItem("value");
});

clearBtn.addEventListener("click", function () {
  textArea.value = "";
  localStorage.setItem("value", textAreaValue);
});

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

changeThemeBtn.addEventListener("click", function () {
  console.log(randomColor());
  body.style.backgroundColor = randomColor();
  textAreaDiv.style.backgroundColor = randomColor();
});

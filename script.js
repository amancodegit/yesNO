"use strict";

const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-No");
const heading = document.querySelector(".heading");
const container = document.querySelector(".question-container");
const container2 = document.querySelector(".answer-container");
let R;
let B;

///////// GENERATE RANDOM NUMBER FOR BUTTON NO TEXT /////////////////
const change = () => {
  R = Math.trunc(Math.random() * 40) + 1;
  B = Math.trunc(Math.random() * 40) + 1;
  btnNo.style.position = "absolute";
  btnNo.style.right = `${R}rem`;
  btnNo.style.bottom = `${B}rem`;
};

/////////////////// SHOW I KNEW IT TEXT //////////////////////////

const know = function () {
  container.style.opacity = 0;
  heading.textContent = "i knew it!😁";
};

btnYes.addEventListener("click", know);
btnNo.addEventListener("click", change);

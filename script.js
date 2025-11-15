"use strict";

const sectionBar = document.getElementById("sectionBar");
const bars = document.getElementById("sortBtn");
const revert = document.getElementById("revertBtn");
const input = document.getElementById("inputArray");

bars.classList.add("invisible");

const sortBars = () => {
  let char = JSON.parse(document.querySelector("input").value);
  // Do the sorting (your current logic)
  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < char.length - 1; j++) {
      if (char[j] > char[j + 1]) {
        [char[j], char[j + 1]] = [char[j + 1], char[j]];
      }
    }
  }
  sectionBar.innerHTML = ``;
  for (let i = 0; i < char.length; i++) {
    sectionBar.innerHTML += `<div style="height: ${char[i]}em; width: 70px; background: #aaa;"></div>`;
  }
};

const revertBars = () => {
  let originalChar = JSON.parse(document.querySelector("input").value);
  sectionBar.innerHTML = ``;
  bars.classList.remove("invisible");
  for (let i = 0; i < originalChar.length; i++) {
    sectionBar.innerHTML += `
     <div style="height: ${originalChar[i]}em; width: 70px; background: #aaa;"></div>
     `;
  }
};

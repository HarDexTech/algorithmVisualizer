'use strict';

const sectionBar = document.getElementById('sectionBar');
const bars = document.getElementById('sortBtn');
const revert = document.getElementById('revertBtn');

// let char = prompt('Enter array:');
// let charArray = JSON.parse(char);
// const originalChar = JSON.parse(char);
// char = charArray;

let char = [1, 3, 5, 7, 3];

for (let i = 0; i < char.length; i++) {
    sectionBar.innerHTML += `
    <div style="height: ${char[i]}em; width: 70px; background: #aaa;"></div>
    `
}

const sortBars = () => {
    sectionBar.innerHTML = ``;
    for (let i = 0; i < char.length; i++) {
        while (char[i] > char[i + 1]) {
            sectionBar.innerHTML = `${char[i] = char[i + 1]}`;
            sectionBar.innerHTML = `${char[i + 1] = char[i]}`;
        }
    }
}
// const sortBars = () => {
//     sectionBar.innerHTML = ``;
//     char = char.sort();
//     for (let i = 0; i < char.length; i++) {
//         sectionBar.innerHTML += `
//     <div style="height: ${char[i]}em; width: 70px; background: #aaa;"></div>
//     `
//     }
// }
const revertBars = () => {
    sectionBar.innerHTML = ``;
    for (let i = 0; i < originalChar.length; i++) {
        sectionBar.innerHTML += `
    <div style="height: ${originalChar[i]}em; width: 70px; background: #aaa;"></div>
    `
    }
}
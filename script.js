'use strict';

 const sectionBar = document.getElementById('sectionBar');
 const bars = document.getElementById('sortBtn');
 const revert = document.getElementById('revertBtn');

 let char = prompt('Enter array:');
 let charArray = JSON.parse(char);
 const originalChar = JSON.parse(char);
 char = charArray;

 // let char = [1, 3, 5, 7, 3];

 for (let i = 0; i < char.length; i++) {
     sectionBar.innerHTML += `
     <div style="height: ${char[i]}em; width: 70px; background: #aaa;"></div>
     `
 }

 const sortBars = () => {
    // Do the sorting (your current logic)
    for (let i = 0; i < char.length; i++) {
        for (let j = 0; j < char.length - 1; j++) {
            if (char[j] > char[j + 1]) {
                [char[j], char[j + 1]] = [char[j + 1], char[j]];
            }
        }
    }
    
    setTimeout(() => {
        sectionBar.innerHTML = ``;
        for (let i = 0; i < char.length; i++) {
            sectionBar.innerHTML += `<div style="height: ${char[i]}em; width: 70px; background: #aaa;"></div>`;
        }
    }, 2000);
}

 const revertBars = () => {
     sectionBar.innerHTML = ``;
     for (let i = 0; i < originalChar.length; i++) {
         sectionBar.innerHTML += `
     <div style="height: ${originalChar[i]}em; width: 70px; background: #aaa;"></div>
     `
     }
 }
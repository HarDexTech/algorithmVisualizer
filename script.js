'use secure'

const sectionBar = document.getElementById('sectionBar');

let char = prompt('Enter array:');
let charArray = JSON.parse(char);
char = charArray;

for(let i = 0; i < char.length; i++){
    sectionBar.innerHTML += `
    <div style="height: ${char[i]}em; width: 70px; background: #aaa;"></div>
    `
}
window.addEventListener('DOMContentLoaded', gridAdd);
const gridContainer = document.getElementById('container');

function gridAdd() {
    for (i = 1; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        let gridText = document.createTextNode(i);
        gridSquare.appendChild(gridText);
        gridContainer.appendChild(gridSquare);
        gridSquare.classList.add('penis');
    }
}
let test = document.getElementsByClassName('penis');
let arr = [...test];
console.log(arr);

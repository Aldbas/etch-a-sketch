// window.addEventListener('load', gridAdd);
const gridContainer = document.getElementById('grid-container');

function gridAdd() {
    for (i = 1; i <= 256; i++) {
        let gridSquare = document.createElement('div');
        let gridText = document.createTextNode(i);
        gridSquare.appendChild(gridText);
        gridContainer.appendChild(gridSquare);
    }
    // callback();
}
function addHover() {
let hover = document.querySelectorAll('div');
hover.forEach(grid => grid.addEventListener('mouseover', function(){
	console.log('PENIS');
this.classList.add('penis');
}));
console.log(hover);
}
gridAdd();
addHover();



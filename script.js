// window.addEventListener('load', gridCreate);
const gridContainer = document.getElementById('grid-container');
let gridSize = 16;

function gridCreate() {
    gridContainer.style.gridTemplate = `repeat(${gridSize}, auto) / repeat(${gridSize},auto)`;
    for (i = 0; i < (gridSize * gridSize); i++) {
        let gridSquare = document.createElement('div');
        gridContainer.appendChild(gridSquare);
    }
    addHover();
}

function addHover() {
    let hover = document.querySelectorAll('#grid-container div');
    hover.forEach(grid => grid.addEventListener('mouseover', function() {
        this.classList.add('penis');
    }));
}
function clearSquares() {
	let square = document.getElementById('grid-container');
	while(square.firstChild) {
			square.removeChild(square.firstChild);

	} 
}

let resizeBtn = document.querySelector('button.resize');
resizeBtn.addEventListener('click', resize);

let resetBtn = document.querySelector('button.clear');
resetBtn.addEventListener('cick', clearSquares);

function resize() {
	console.log(gridSize);
	gridSize = prompt('Enter a new number to resize grid');
	clearSquares();
	gridCreate();
	addHover();
}
gridCreate();
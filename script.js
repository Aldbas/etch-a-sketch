// window.addEventListener('load', gridCreate);
const gridContainer = document.getElementById('grid-container');
let gridSize = 16;

function gridCreate() {
    gridContainer.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    for (i = 0; i < (gridSize * gridSize); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.className = 'square';
        gridSquare.style.backgroundColor = "purple";
        gridSquare.style.opacity = "0.0";
        gridContainer.appendChild(gridSquare);
    }
    addHover();
}

function addHover() {
    let hover = document.querySelectorAll('#grid-container div');
    hover.forEach(grid => grid.addEventListener('mouseover', changingGrayScale));

}

function changingGrayScale(e) {
	e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.3;
}



let resizeBtn = document.querySelector('button.resize');
resizeBtn.addEventListener('click', resize);

let clearBtn = document.querySelector('button.clear');
clearBtn.addEventListener('click', clearSquares);

function clearSquares() {
    let squares = document.getElementById('grid-container').innerHTML = '';
    gridCreate();
}

function resize() {
    gridSize = prompt('Enter a new number to resize grid');
    clearSquares();
    gridCreate();
    addHover();
}
gridCreate();
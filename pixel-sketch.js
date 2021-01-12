const body = document.querySelectorAll('body');
const container = document.getElementById('container');
let color = 'black';

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');

const defaultGrid = document.getElementById('defaultSize');

let slider = document.getElementById('gridSize');

//function to empty container before changing size
function clearGrid(){
    var count = document.getElementById('container').childElementCount;

    for(i = count; i > 0; i--){
        let cell = container.querySelector('div');
        container.removeChild(cell);
    }
};

//function to change number of <div> elements in container
function makeGrid(cellNumber){
    clearGrid();
    let rows = cellNumber;
    let cols = cellNumber;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
        container.appendChild(cell).id = 'defaultSquares';
        container.appendChild(cell).style = "background-color: white";
    };
};

//function to reset default container settings
function defaultCellSize(){
    clearGrid();
    
    let rows = 16;
    let cols = 16;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
        container.appendChild(cell).id = 'defaultSquares';
        container.appendChild(cell).style = "background-color: white";
    };

        slider.value = 16;
};

//to change cell color on mouseover


function changeCellColor(){
    let cells = container.querySelector('.cell');

    
};

//load with default size
makeGrid(16);

document.getElementById('defaultSize').addEventListener('click',defaultCellSize);


const body = document.querySelectorAll('body');
const container = document.getElementById('container');

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');

const defaultGrid = document.getElementById('defaultSize');

let slider = document.getElementById('gridSize');

//var cellBackground = 'black';

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
        let cells = document.createElement("div");
        container.appendChild(cells).className = "cell";
        container.appendChild(cells).id = 'defaultSquares';
        container.appendChild(cells).style = "background-color: white";
        container.appendChild(cells).addEventListener('mouseover',changeColor);
    };
};

//function to reset default container settings
function defaultCellSize(){
    clearGrid();
    
    makeGrid(16);
  
    slider.value = 16;
};

//function to change cell color with mouseover
function changeColor(){
    document.styleSheets[0].cssRules[0].style;
    cell = container.getElementsByClassName(".cell");
    cell.setProperty("background-color","black");
};

//load with default size
makeGrid(16);

//allows Reset button to return grid to default settings
document.getElementById('defaultSize').addEventListener('click',defaultCellSize);

//Event listeners to change cellColor variable

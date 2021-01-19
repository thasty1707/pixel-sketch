const body = document.querySelectorAll('body');
const container = document.getElementById('container');

const clearBtn = document.getElementById('clear');
const blackCells = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');
const newGrid = document.getElementById('newGrid');

const colorBtns = document.querySelectorAll('button');

const defaultGrid = document.getElementById('defaultSize');

let slider = document.getElementById('gridSize');

var color = '#000000';

//function to empty container of <div> elements before changing size
function clearGrid(){
    var count = document.getElementById('container').childElementCount;

    for(i = count; i > 0; i--){
        let cell = container.querySelector('div');
        container.removeChild(cell);
    }
};

//function to fill container with <div> elements
function makeGrid(cellNumber){
    clearGrid();
    let rows = cellNumber;
    let cols = cellNumber;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cells = document.createElement("div");
        container.appendChild(cells).className = "cell";
    };
    let cells = container.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseenter',changeColor));
};

function makeNewGrid(){
    clearGrid();
    let rows = prompt("How many pixels per side? (max: 100)");
    let cols = rows;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cells = document.createElement("div");
        container.appendChild(cells).className = "cell";
    };
    let cells = container.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseenter',changeColor));
};

//function to reset container to default settings
function defaultCellSize(){
    clearGrid();
    
    makeGrid(16);
  
    slider.value = 16;
};

//function to change cell color on mouse event
function changeColor(){
    switch(color){
        case 'rando':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.classList.remove('grey');
            break;
        case 'grey':
        if(this.style.backgroundColor.match(/rgba/)){
                let cellOpacity = Number(this.style.backgroundColor.slice(-4,-1));
                if(cellOpacity <= 0.9){
                    this.style.backgroundColor = `rgba(0,0,0, ${cellOpacity + 0.1})`;
                    this.classList.add('grey');
                };
            }else if(this.style.backgroundColor === 'rgb(0,0,0)' && this.classList == 'cell grey'){
                return;
            }else{
                this.style.backgroundColor = `rgba(0,0,0,0.1)`;
                this.classList.add('grey');
            };
            break;
        case 'black':
            this.style.backgroundColor = '#000000';
            this.classList.remove('grey');
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove('grey');
            break;
        };

};

//function to capture color chosen by user
function chosenColor(event){
    switch(event.target.dataset.color){
        case 'rando':
            color = 'rando';
            break;
        case 'grey':
            color = 'grey';
            break;
        default:
            color = 'black';
            break;
    };
};

//function to clear all cell background colors
function clearColor(){
    let cells = container.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'transparent');
    cells.forEach(cell => cell.classList.remove('grey'));
};

//load with default size
makeGrid(16);

//allows Reset button to return grid to default settings
document.getElementById('defaultSize').addEventListener('click',defaultCellSize);

//Event listeners that affect cell background colors
clearBtn.addEventListener('click',clearColor);
colorBtns.forEach(colorBtn => colorBtn.addEventListener('click',chosenColor));
newGrid.addEventListener('click',makeNewGrid);
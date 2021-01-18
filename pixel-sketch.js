const body = document.querySelectorAll('body');
const container = document.getElementById('container');

const clearBtn = document.getElementById('clear');
const blackCells = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');

const colorBtns = document.querySelectorAll('button');

const defaultGrid = document.getElementById('defaultSize');

let slider = document.getElementById('gridSize');

var color = 'black';

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
            this.style.backgroundColor = `rgba(${Math.random() * 360}, ${Math.random() * 360}, ${Math.random() * 360},1)`;
            break;
        case 'grey':
            let cellOpacity = Number(this.style.backgroundColor.slice(-4,-1));
            let i = 1;

            while(i < 10){
                this.style.backgroundColor = `rgba(0,0,0, ${cellOpacity + 0.1})`;

                i++;
            };
            break;
        case 'black':
            this.style.backgroundColor = 'rgba(0,0,0,1)';
            break;
        default:
            this.style.backgroundColor = color;
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
};

//load with default size
makeGrid(16);

//allows Reset button to return grid to default settings
document.getElementById('defaultSize').addEventListener('click',defaultCellSize);

//Event listeners that affect cell background colors
clearBtn.addEventListener('click',clearColor);
colorBtns.forEach(colorBtn => colorBtn.addEventListener('click',chosenColor));
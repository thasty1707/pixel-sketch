const body = document.querySelectorAll('body');
const container = document.getElementById('container');

const newGrid = document.getElementById('newGrid');
const defaultGrid = document.getElementById('defaultSketch');
const blackCells = document.getElementById('toBlack');
const greyScale = document.getElementById('shades');
const randomColors = document.getElementById('colorful');
const clearBtn = document.getElementById('clear');

const colorBtns = document.querySelectorAll('button');



//color variable for cell background
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

function makeNewGrid(cellNumber){
    clearGrid();
    let rows = cellNumber;
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

function newPixels(){
    let pixels = Number(prompt("How many pixels per side (min 16, max 100)?","16"))

    if(pixels < 16 || pixels > 100){
        alert("Invalid number. Please choose from 16 to 100 pixels.");
        return;
    }else{
        makeGrid(pixels);
    };
};

//function to reset container to default settings
function defaultCellSize(){
    clearGrid();
    
    makeGrid(16);
};

//function to apply color choice on mouse event
function changeColor(){
    switch(color){
        case 'rando':
            this.style.backgroundColor = `rgb(${Math.random() * 360}, ${Math.random() * 360}, ${Math.random() * 360})`;
            this.classList.remove('grey');
            break;
        case 'grey':
            let cellColor = window.getComputedStyle(this,null).getPropertyValue("background-color");
            let colorParts = cellColor.match(/[\d.]+/g);
            let colorOpacity = Number(cellColor.slice(-4,-1));          
           
            if(colorParts.length === 3 && this.classList[1] === 'grey'){
                return;
            }else if(colorOpacity <= 0.9){
                this.style.backgroundColor = `rgba(0,0,0, ${colorOpacity + 0.1})`;
                return;
            }else{
                this.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
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

//function to capture color choice
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

//load sketch with default size
makeGrid(16);

//Event Listener for Reset button to return sketch to default settings
document.getElementById('defaultSketch').addEventListener('click',defaultCellSize);

//Event listeners that affect cell background colors
clearBtn.addEventListener('click',clearColor);
colorBtns.forEach(colorBtn => colorBtn.addEventListener('click',chosenColor));
newGrid.addEventListener('click',newPixels);

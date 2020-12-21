const body = document.querySelectorAll('body');
const container = document.getElementById('container');
let cells = document.getElementsByClassName('cell');

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');

const defaultGrid = document.getElementById('defaultSize');
const largeGrid = document.getElementById('halfCellSize');

let slider = document.getElementById('gridSize');
//let output = document.getElementById('pixelNumber');
//output.innerHTML = slider.value;

//function to empty container before changing size
function clearGrid(){
    container.style.removeProperty('--grid-rows');
    container.style.removeProperty('--grid-cols');
};

//functions to fill container
function makeGrid(cellNumber){
    clearGrid();
    let rows = cellNumber;
    let cols = cellNumber;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
    };
};

function defaultCellSize(){
    clearGrid();
    
    let rows = 16;
    let cols = 16;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
    };
};

function sketchPadSize(){

};

function blackCells(){

};

function colorfulCells(){

};

function darkenCells(){

};

function clearGrid(){

};

function fillCells(){

}

//load with default size
defaultCellSize(16);


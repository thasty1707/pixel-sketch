const container = document.getElementById('container');
let cells = document.getElementsByClassName('cell');
//const cellNumber = document.querySelector('#gridSize').value;

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');
const changeBttn = document.getElementById('newGrid');

let slider = document.getElementById('gridSize');
//let output = document.getElementById('pixelNumber');
//output.innerHTML = slider.value;

//functions to fill container
function makeGrid(cellNumber){
    let rows = cellNumber;
    let cols = cellNumber;

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(c = 1; c <= rows * cols; c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
    };
};

function changeGrid(){
    let box = container.querySelectorAll('div');
    box.forEach(box => box.remove());

    makeGrid(slider.value);
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
makeGrid(16);

//Event listener to change grid size

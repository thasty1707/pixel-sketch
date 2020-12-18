const container = document.getElementById('container');
let cells = document.getElementsByClassName('cell');
const cellNumber = document.querySelector('#gridSize').value;

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');
const change = document.getElementById('newGrid');

let slider = document.getElementById('gridSize');
//let output = document.getElementById('pixelNumber');
//output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
};

//functions to fill container
function defaultGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < rows * cols; c++){
        let cell = document.createElement("div");

        container.appendChild(cell).className = "cell";
    };
};

function changeGrid(){

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
defaultGrid(16,16);

//change.addEventListener('click',changeGrid());
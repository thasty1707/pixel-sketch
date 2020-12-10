const container = document.getElementById('container');
let cells = document.getElementsByClassName('cell');
const cellNumber = document.querySelector('#gridSize').value;

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');
const change = document.getElementById('submit');

let slider = document.getElementById('gridSize');
let output = document.getElementById('pixelNumber');
output.innerHTML = slider.value;

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
    let cellNum = slider.value;
    
    for(c = 0; c < cellNum * cellNum; c++){
        let cell = document.createElement("div");
        //container.style.setProperty('--grid-rows', cellNum);
        //container.style.setProperty('--grid-cols', cellNum);
        container.style.gridTemplateColumns = `repat(${cellNum}, 1fr)`;
        container.style.gridTemplateRows = `repat(${cellNum}, 1fr)`;
        //container.appendChild(cell).className = "cell";
        container.insertAdjacentElement('beforeend',cell);
    };

    
};

//function sketchPadSize(){
    //let boxes = container.querySelectorAll('div');
    //boxes.forEach(boxes => boxes.remove());
    //changeGrid(gridSize, gridSize);
//};

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

//container.addEventListener('onload',defaultGrid(16, 16));
slider.addEventListener('input',changeGrid());
//submit.addEventListener('onclick',sketchPadSize());
const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
//const pixelCount = document.getElementById('sizeBar');

const clearBtn = document.getElementById('clear');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');

//Can this be helpful?
//function gridLayout(height, width){
    //const container = document.getElementById('container');
    //container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    //container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
//};

defaultGrid();

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum){
    for(r = 0; r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum){
    for(i = 0; i < rows.length; i++){
        for(j =0; j < cellNum; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
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
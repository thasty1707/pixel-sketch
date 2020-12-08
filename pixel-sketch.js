const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
//const gridSize = document.getElementById('gridSize').value;

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

//These functions work but are a little difficult to use.
//defaultGrid();

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

//New function attempt:
makeGrid(20, 20);

function makeGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(c = 0; c < rows * cols; c++){
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "cell";
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
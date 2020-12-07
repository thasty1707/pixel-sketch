//const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
const pixelCount = document.getElementById('sizeBar');
const blackPixels = document.getElementById('toBlack');
const randomColors = document.getElementById('colorful');
const greyScale = document.getElementById('darken');

function gridLayout(height, width){
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
};

const fillGrid = (x, y, blocksize, numOfBlocks, color) => {
    const container = document.getElementById('container');
    const test = Array(num_of_blocks).keys()
        for(var i of test){
            let markup = `<div id="card ${i}"
                                style = "grid-column: ${Math.floor(Math.random()*= * y) + 1} / span ${blcokSize};
                                background-clor: ${color};
                                border: 1px black solid;">${1}</div>`;
            container.innherHTML += markup;
        };
}

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
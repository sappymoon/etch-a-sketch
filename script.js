let r = 0;
let g = 0;
let b = 0;

//changes grid based on slider value
function changeGrid(){
    black();
    let grid = document.getElementById('grid');
    let sliderValue = document.getElementById('slider').value;

    grid.innerHTML = ''; //resets grid

    document.getElementById('dimensions').innerText = sliderValue + " x " + sliderValue;

    grid.style.setProperty('--grid-rows', sliderValue);
    grid.style.setProperty('--grid-columns', sliderValue);

    for(i = 0; i < sliderValue * sliderValue; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem)
        gridItem.onmouseover = function(){
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
}

//creates defualt 16x16 grid
function defaultGrid(){
    let grid = document.getElementById('grid');

    grid.style.setProperty('--grid-rows', 16);
    grid.style.setProperty('--grid-columns', 16);

    for(i = 0; i < 16 * 16; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem)
        gridItem.onmouseover = function(){
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
}

//change hover color
function rgb(){
    grid.onmouseover = function(){
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
    }   
}

function black(){
    grid.onmouseover = function(){
        r = 0;
        g = 0;
        b = 0;
    }   
}

function eraser(){
    grid.onmouseover = function(){
        r = 255;
        g = 255;
        b = 255;
    }   
}

defaultGrid();






let color = '#000000';
console.log(document.getElementById("color-picker").value);

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
            this.style.backgroundColor = color;
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
            this.style.backgroundColor = color;
        }
    }
}

//change hover color
function rgb(){
    grid.onmouseover = function(){
        color = '#'+(Math.random().toString(16)+'00000').slice(2,8);
    }   
}

function black(){
    grid.onmouseover = function(){
        color = '#000000';
    }   
}

function eraser(){
    grid.onmouseover = function(){
        color = '#FFFFFF';
    }   
}

function pickColor(){
    grid.onmouseover = function(){
        color = document.getElementById("color-picker").value;
    }
}

defaultGrid();






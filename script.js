//changes grid based on slider value
function changeGrid(){
    let grid = document.getElementById('grid');
    let sliderValue = document.getElementById('slider').value;
    let gridParent = document.getElementsByClassName('grid-flex');

    grid.innerHTML = ''; //resets grid

    document.getElementById('dimensions').innerText = sliderValue + " x " + sliderValue;

    grid.style.setProperty('--grid-rows', sliderValue);
    grid.style.setProperty('--grid-columns', sliderValue);

    for(i = 0; i < sliderValue * sliderValue; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem).className = 'grid-item';
        gridItem.onmouseover = function(){
            this.style.backgroundColor = 'black';
        }
    }
}

//creates defualt 16x16 grid
function defaultGrid(){
    let grid = document.getElementById('grid');
    let sliderValue = document.getElementById('slider').value;
    let gridParent = document.getElementsByClassName('grid-flex');

    grid.style.setProperty('--grid-rows', 16);
    grid.style.setProperty('--grid-columns', 16);

    for(i = 0; i < 16 * 16; i++){
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem).className = 'grid-item';
        gridItem.onmouseover = function(){
            this.style.backgroundColor = 'black';
        }
    }
}

defaultGrid();






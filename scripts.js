let imgEl = document.createElement('img');
let counter = document.querySelector('#point');
imgEl.src='./images/squirrel.png';
let count = 0;

function squirrelCatch(){
   count++;
   counter.innerHTML = count;
}

setInterval(() => {
    let randomHole= Math.floor(Math.random() * 8);
    let hole = document.querySelector(`.row-${randomHole}`);
    const img = hole.querySelector('img');
    imgEl.addEventListener('click', squirrelCatch);    

    if(img){
       img.remove();
    }
    else {
        hole.appendChild(imgEl);
    }
}, 1000);
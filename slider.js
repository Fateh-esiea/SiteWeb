/******************************
 * défilement auto, toutes les 2 sec
 * 
 */
var i = 0;
var images = ['images/img1.jpg','images/img2.jpg','images/img4.jpg'];
var time = 2000;



function changeImg(){

document.slide.src = images[i];

if (i < images.length - 1) {
i++;
} else {
i = 0;
}
setTimeout("changeImg()", time);
}

window.onload = changeImg;

/**************************
 * Slider avec changement manuel
 * Avec appuie souris et appuie flèche
 * 
 */

const items = document.querySelectorAll('div.slider > img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;




function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

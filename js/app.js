'use strict';

var picOne = document.getElementById('pic1');
var picTwo = document.getElementById('pic2');
var picThree = document.getElementById('pic3');

var picArray = [];

function CreatePicture(src, name) {
    this.src = `../img/${src}.jpg`;
    this.alt = name;
    this.title = name;

    picArray.push(this);
}

function loadImages() {
    new CreatePicture('bag', 'Bag');
    new CreatePicture('banana', 'Banana');
    new CreatePicture('bathroom', 'bathroom');
    new CreatePicture('boots', 'Boots');
    new CreatePicture('breakfast', 'Breakfast');
    new CreatePicture('bubblegum', 'Bubblegum');
    new CreatePicture('chair', 'Chair');
    new CreatePicture('cthulhu', 'Cthulhu');
    new CreatePicture('dog-duck', 'Dog-Duck');
    new CreatePicture('dragon', 'Dragon');
    new CreatePicture('pen', 'Pen');
    new CreatePicture('pet-sweep', 'Pet-Sweep');
    new CreatePicture('scissors', 'Scissors');
    new CreatePicture('shark', 'Shark');
    new CreatePicture('sweep', 'Sweep');
    new CreatePicture('tauntaun', 'Tauntaun');
    new CreatePicture('unicorn', 'Unicorn');
    new CreatePicture('usb', 'USB');
    new CreatePicture('water-can', 'Watering Can');
    new CreatePicture('wine-glass', 'Wine Glass');
}

function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function renderPictures() {
    var index = randomIndex(picArray.length);
    
    // render firstPic
    picOne.src = picArray[index].src;
    picOne.title = picArray[index].title;
    picOne.alt = picArray[index].alt;
    
    picOne.textContent = picOne.title = picArray[index].title;
    
    // render secondPic
    var indexTwo = randomIndex(picArray.length);
    
    while (indexTwo === index) {
        indexTwo = randomIndex(picArray.length);
    };

    picTwo.src = picArray[indexTwo].src;
    picTwo.title = picArray[indexTwo].title;
    picTwo.alt = picArray[indexTwo].alt;

    picTwo.textContent = picTwo.title = picArray[indexTwo].title

    // render thirdPic
    var indexThree = randomIndex(picArray.length);

    while (indexThree === index || indexThree === indexTwo) {
        indexThree = randomIndex(picArray.length);
    };

    picThree.src = picArray[indexThree].src;
    picThree.title = picArray[indexThree].title;
    picThree.alt = picArray[indexThree].alt;

    picThree.textContent = picThree.title = picArray[indexThree].title;
}



loadImages();
renderPictures();
// console.log(randomIndex(picArray.length));
console.table(picArray);
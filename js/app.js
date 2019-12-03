'use strict';

var picOne = document.getElementById('pic1');
var picTwo = document.getElementById('pic2');
var picThree = document.getElementById('pic3');

var picContainer = document.getElementById('picBox');

var picArray = [];

function CreatePicture(src, name) {
    this.src = `../img/${src}.jpg`;
    this.alt = name;
    this.title = name;
    this.views = 0;
    this.clicks = 0;

    picArray.push(this);
}

// construct allllll the pics
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

// pick a random index
function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Make pics show up on page
function renderPictures() {
    var index = randomIndex(picArray.length);
    
    // render firstPic
    picOne.src = picArray[index].src;
    picOne.title = picArray[index].title;
    picOne.alt = picArray[index].alt;
    
    picArray[index].views++;

    picOne.textContent = picOne.title = picArray[index].title;
    
    // render secondPic
    var indexTwo = randomIndex(picArray.length);
    
    while (indexTwo === index) {
        indexTwo = randomIndex(picArray.length);
    };

    picTwo.src = picArray[indexTwo].src;
    picTwo.title = picArray[indexTwo].title;
    picTwo.alt = picArray[indexTwo].alt;

    picArray[indexTwo].views++;

    picTwo.textContent = picTwo.title = picArray[indexTwo].title

    // render thirdPic
    var indexThree = randomIndex(picArray.length);

    while (indexThree === index || indexThree === indexTwo) {
        indexThree = randomIndex(picArray.length);
    };

    picThree.src = picArray[indexThree].src;
    picThree.title = picArray[indexThree].title;
    picThree.alt = picArray[indexThree].alt;

    picArray[indexThree].views++;

    picThree.textContent = picThree.title = picArray[indexThree].title;
}

// ANOTHER WAY TO RENDER
// var picArrayContainers = photoOne, photoTwo, photoThree
// function picSelect(){
//  var currentImages = [];
//
//  for (var i = 0; i < picArrayContainers.length; i++) {
//      var currentRandomIndex = randomIndex(picArray.length);
//          while (currentImages.includes(currentRandomIndex)) {
//          currentRandomIndex = randomIndex(picArray.length);
//          }
//      currentImages.push(currentRandomIndex);
//      picArrayContainers[i].src = picArray[currentRandomIndex].src;
//      picArrayContainers[i].title = picArray[currentRandomIndex].title;
//      picArrayContainers[i].alt = picArray[currentRandomIndex].alt;
//      picArray[currentRandomIndex].views++;
//  }
// }

// Handle pic clicks
function handleClick(event) {
    event.preventDefault();

    var vote = event.target.title;
    var clickCount = 0;

    for (var i = 0; i < picArray.length; i++) {
        if (vote === picArray[i].title){
            picArray[i].clicks++;
        }
    }

    renderPictures();
    clickCount++;
    console.table(picArray);

    // A WAY TO DO THINGS
    // if (clickCount !== 0) {

    // }

    // else {
    //  picContainer.removeEventListener('click', handleClick);
    //  displayResults();
    //  hide(picContainer);
    // }

    if(clickCount === 25) {
        picContainer.removeEventListener('click', handleClick);
    }
    return vote;
}

// SHOW HIDE FUNCTIONS
// function show(elem) {
//  elem.style.display
// }

// function hide(elem){
// 
// }

// DISPLAY RESULTS 
// function displayResults(){
//      var resultList = document.getElementById('resultList');
//      var ulEl = document.createElement('ul');
//      for(var i = 0; 0 < picArray.length; i++) {
//          var liEl = document.createElement('li');
//          liEl.textContent = `${picArray[i].title} had ${picArray[i].clicks} clicks & ${picArray[i].views} views.`;
//          ulEl.appendChild(liEl);
//      }
//      resultList.appendChild(ulEl);
// }

loadImages();

picContainer.addEventListener('click', handleClick);

renderPictures();

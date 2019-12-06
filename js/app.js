'use strict';

var picOne = document.getElementById('pic1');
var picTwo = document.getElementById('pic2');
var picThree = document.getElementById('pic3');

var picContainer = document.getElementById('picBox');
var resultList = document.getElementById('resultList');
var chartBox = document.getElementById('chartBox');

var clickCount = 0;
var picArray = [];

var clickArray = [];
var viewsArray = [];
var titleArray = [];

var appearingPics = [picOne, picTwo, picThree];
var uniquePics = [];

// hide(resultList);
hide(chartBox);

// constructor function
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
  var getPics = localStorage.getItem('picData');
  var parsedPics = JSON.parse(getPics);
  
  if (parsedPics.length > 0) {
    picArray = parsedPics;
  } else {
    new CreatePicture('bag', 'Star Wars Themed Rolly Bag');
    new CreatePicture('banana', 'Banana Cutter');
    new CreatePicture('bathroom', 'Bathroom IPod Stand');
    new CreatePicture('boots', 'Boots');
    new CreatePicture('breakfast', 'All-in-One Breakfast');
    new CreatePicture('bubblegum', 'Meatball Bubblegum');
    new CreatePicture('chair', 'NonErgonomic Chair');
    new CreatePicture('cthulhu', 'Cthulhu');
    new CreatePicture('dog-duck', 'Duck Lips for Dogs');
    new CreatePicture('dragon', 'Dragon Meat');
    new CreatePicture('pen', 'Utensil Pen');
    new CreatePicture('pet-sweep', 'Pet Sweeper Shoes');
    new CreatePicture('scissors', 'Pizza Scissors');
    new CreatePicture('shark', 'Personal-Size Shark');
    new CreatePicture('sweep', 'Baby Sweeper Onesie');
    new CreatePicture('tauntaun', 'Tauntaun Sleeping Bag');
    new CreatePicture('unicorn', 'Unicorn Meat');
    new CreatePicture('usb', 'Tentacle USB Drive');
    new CreatePicture('water-can', 'Watering Can');
    new CreatePicture('wine-glass', 'Wine Glass');
  }
}

// pick a random index
function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Render unique group of six
function fetchUniqueSix() {
  while (uniquePics.length < 6) {
    var random = randomIndex(picArray.length);

    if (!uniquePics.includes(random)){
      uniquePics.push(random);
    }
  }
}
// Remove front three images
function removeFrontThree() {
  for (var i = 0 ; i < 3 ; i++) {
    uniquePics.shift();
  }
};

// Make pics show up on page
function renderPictures() {
  fetchUniqueSix();
  //   console.log(uniquePics);

  for (var j = 0 ; j < appearingPics.length ; j++) {
    appearingPics[j].src = picArray[uniquePics[j]].src;
    appearingPics[j].title = picArray[uniquePics[j]].title;
    appearingPics[j].alt = picArray[uniquePics[j]].alt;

    picArray[uniquePics[j]].views++;
  }
}

// SHOW/HIDE FUNCTIONS
function show(elem) {
  elem.style.display = 'block';
}

function hide(elem){
  elem.style.display = 'none';
}

// DISPLAY RESULTS FUNCTION
function displayResults() {
  console.log('I am here!');
  var ulEl = document.createElement('ul');
  for(var i = 0; i < picArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${picArray[i].title}: ${picArray[i].clicks} clicks & ${picArray[i].views} views.`;
    ulEl.appendChild(liEl);
  }
  resultList.appendChild(ulEl);
};

// MAKE CHART
function makeChart() {
  var ctx = document.getElementById('resultChart').getContext('2d');
  var resultChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: titleArray,
      datasets: [{
        label: 'Number of Times Clicked',
        data: clickArray,
        backgroundColor: [
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
          'rgba(217, 125, 72, 1)',
        ],
        borderColor: [
          'rgba(217, 125, 72, 1)',
        ],
        borderWidth: 1,
      }, {
        label: 'Number of Times Viewed',
        data: viewsArray,
        backgroundColor: [
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
          'rgba(242, 209, 109, 1)',
        ],
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Handle pic clicks
function handleClick(event) {
  event.preventDefault();

  var vote = event.target.title;

  for (var i = 0; i < picArray.length; i++) {
    if (vote === picArray[i].title) {
      picArray[i].clicks++;
    }
  }

  renderPictures();
  clickCount++;
  removeFrontThree();
  // console.table(picArray);

  if (clickCount === 25) {
    picContainer.removeEventListener('click', handleClick);
    // displayResults();
    hide(picContainer);
    // show(resultList);
    createDataArrays(picArray);
    localStorage.setItem('picData', JSON.stringify(picArray));
    show(chartBox);
    makeChart();
  }
  return vote;
}

// Create Data Arrays
function createDataArrays(array) {
  for (var i = 0 ; i < picArray.length ; i++) {
    clickArray.push(array[i].clicks);
    viewsArray.push(array[i].views);
    titleArray.push(array[i].title);
  }
}


loadImages();

picContainer.addEventListener('click', handleClick);

renderPictures();

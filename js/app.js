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

// hide(resultList);
hide(chartBox);

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

// SHOW/HIDE FUNCTIONS
function show(elem) {
 elem.style.display = 'block';
}

function hide(elem){
 elem.style.display = 'none';
}

// DISPLAY RESULTS FUNCTION
// function displayResults() {
//     console.log('I am here!');
//      var ulEl = document.createElement('ul');
//      for(var i = 0; i < picArray.length; i++) {
//          var liEl = document.createElement('li');
//          liEl.textContent = `${picArray[i].title}: ${picArray[i].clicks} clicks & ${picArray[i].views} views.`;
//          ulEl.appendChild(liEl);
//      }
//      resultList.appendChild(ulEl);
// };

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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'Number of Times Viewed',
            data: viewsArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
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
    // console.table(picArray);

    if (clickCount === 25) {
        picContainer.removeEventListener('click', handleClick);
        // displayResults();
        hide(picContainer);
        // show(resultList);
        createDataArrays(picArray);
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

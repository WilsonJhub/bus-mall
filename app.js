'use strict';

console.log('IT\'S ALIVE');

// <------------------ GLOBAL VARIABLES ------------------>


let votingRounds = 25;

let productArray = [];

// <------------------ DOM REFERENCES ------------------>

let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

// let resultsBtn = document.getElementById('show-results-btn');
// let resultsList = document.getElementById('display-results-list');


// <------------------ CANVAS ELEMENT FOR CHART ------------------>

let ctx = document.getElementById('myChart').getContext('2d');



// <------------------ CONSTRUCTOR ------------------>


function Product(name, fileExtension = 'jpg',) {
  this.productName = name;
  this.image = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;


  productArray.push(this);

}
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');
new Product('sweep', 'png');

console.log(productArray);


// <------------------ HELPER FUNCTIONS ------------------>


function getRandomIndex() {

  return Math.floor(Math.random() * productArray.length);

}

function renderImgs() {

  let productOneIndex = getRandomIndex();
  let productTwoIndex = getRandomIndex();
  let productThreeIndex = getRandomIndex();

  while (productOneIndex === productTwoIndex || productOneIndex === productThreeIndex) {
    productOneIndex = getRandomIndex();
  }

  while (productTwoIndex === productOneIndex || productTwoIndex === productThreeIndex) {
      productTwoIndex = getRandomIndex();
  }

    imgOne.src = productArray[productOneIndex].image;
    imgOne.alt = productArray[productOneIndex].productName;
    productArray[productOneIndex].views++;

    imgTwo.src = productArray[productTwoIndex].image;
    imgTwo.alt = productArray[productTwoIndex].productName;
    productArray[productTwoIndex].views++;

    imgThree.src = productArray[productThreeIndex].image;
    imgThree.alt = productArray[productThreeIndex].productName;
    productArray[productThreeIndex].views++;

  }

renderImgs();


function renderChart(){
  let productArray = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < productArray.length; i++){
    productName.push(productArray[i].productName);
    productVotes.push(productArray[i].clicks);
    productViews.push(productArray[i].views);
  }
}


// <------------------ EVENT HANDLERS ------------------>

function handleClick(event) {

  let imgClicked = event.target.alt;

  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].productName) {
      productArray[i].clicks++;

    }
  }

  renderImgs();

  votingRounds--;
  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
    return;
  }

  renderImgs();

}


// <------------------ EVENT LISTENER ------------------>


imgContainer.addEventListener('click', handleClick);


// <------------------ CHART ------------------>


let myChartObj = {
  type: 'bar',
  data: {
      labels: productArray,
      datasets: [{
          label: 'Number of Votes',
          data: productVotes,
          backgroundColor: [
              'Pink'
          ],
          borderColor: [
              'lightblue'
          ],
          borderWidth: 2
      },
      {
        label: 'Number of Views',
        data: productViews,
        backgroundColor: [
            'lightblue'
        ],
        borderColor: [
            'pink'
        ],
        borderWidth: 4
    }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
}

const myChart = new Chart(ctx, myChartObj);

renderChart();
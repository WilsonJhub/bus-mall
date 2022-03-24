'use strict';



// <------------------ GLOBAL VARIABLES ------------------>



let votingRounds = 25;

let productArray = [];
let productVotes = [];
let productViews = [];
let previousIndex = [];



// <------------------ DOM REFERENCES ------------------>

let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let resultsBtn = document.getElementById('show-results-btn');
// let resultsList = document.getElementById('display-results-list');


// <------------------ CANVAS ELEMENT FOR CHART ------------------>

let ctx = document.getElementById('myChart').getContext('2d');



// <------------------ CANVAS ELEMENT FOR CHART ------------------>

// let ctx = document.getElementById('myChart').getContext('2d');


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



// <------------------ HELPER FUNCTIONS ------------------>


function getRandomIndex() {

  return Math.floor(Math.random() * productArray.length);

}


function renderImgs() {

  while (previousIndex.length < 6) {
    let myIndex = getRandomIndex();
    if (!previousIndex.includes(myIndex)) {
      previousIndex.push(myIndex);
    }
  } 
  if (previousIndex.length === 6) {
    previousIndex.splice(0, 3);
  }

  imgOne.src = productArray[previousIndex[0]].image;
  imgOne.alt = productArray[previousIndex[0]].productName;
  productArray[previousIndex[0]].views++;

  imgTwo.src = productArray[previousIndex[1]].image;
  imgTwo.alt = productArray[previousIndex[1]].productName;
  productArray[previousIndex[1]].views++;

  imgThree.src = productArray[previousIndex[2]].image;
  imgThree.alt = productArray[previousIndex[2]].productName;
  productArray[previousIndex[2]].views++;
}


renderImgs();



function renderChart() {
  let productName = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < productArray.length; i++) {
    productName.push(productArray[i].productName);
    productVotes.push(productArray[i].clicks);
    productViews.push(productArray[i].views);
  }
  let myChartObj = {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [{
        label: 'Number of Votes',
        data: productVotes,
        backgroundColor: [
          'darkblue'
        ],
        borderColor: [
          'blue'
        ],
        borderWidth: 2
      },
      {
        label: 'Number of Views',
        data: productViews,
        backgroundColor: [
          'red'
        ],
        borderColor: [
          'red'
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
}




// <------------------ EVENT HANDLERS ------------------>

function handleClick(event) {

  let imgClicked = event.target.alt;

  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].productName) {
      productArray[i].clicks++;

    }
  }



  votingRounds--;
  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
    renderChart();
    return;
  }

  renderImgs();

}


// <------------------ EVENT LISTENER ------------------>


imgContainer.addEventListener('click', handleClick);



// <------------------ CHART ------------------>







'use strict';

console.log('IT\'S ALIVE');

let votingRounds = 25;

let productArray = [];

// <------------------ DOM REFERENCES ------------------>

let imgContainer = document.getElementById('container');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('display-results-list');


// <------------------ CONSTRUCTOR ------------------>


function Product(name, timeShown = 'jpg',){
	this.productName = name;
	this.image = `img/${name}.${timeShown}`;
	this.views = 0;
	this.clicks = 0;
	this.shown = 0;
  
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


  function getRandomIndex(){

    return Math.floor(Math.random()* productArray.length);

}

function renderImgs(){

let productOneIndex = getRandomIndex();
let productTwoIndex = getRandomIndex();
let productThreeIndex = getRandomIndex();

while(productOneIndex === productTwoIndex || productOneIndex === productThreeIndex || productTwoIndex === productThreeIndex){
  productOneIndex = getRandomIndex();
  productTwoIndex = getRandomIndex();
  productThreeIndex = getRandomIndex();
  

  // Running multiple conditions?? (Line 71-73)
}

imgOne.src = productArray[productOneIndex].image;
imgOne.alt = productArray[productOneIndex].productName
productArray[productOneIndex].views++;

imgTwo.src = productArray[productTwoIndex].image;
imgTwo.alt = productArray[productTwoIndex].productName
productArray[productTwoIndex].views++;

imgThree.src = productArray[productThreeIndex].image;
imgThree.alt = productArray[productThreeIndex].productName
productArray[productThreeIndex].views++;

}

renderImgs();


// <------------------ EVENT HANDLERS ------------------>

function handleClick(event){

  let imgClicked = event.target.alt;

  for(let haha = 0; haha < productArray.length; haha++){
    if(imgClicked === productArray[haha].productName){
      productArray[haha].clicks++;

    }
  }
  renderImgs();

  votingRounds--;
  if(votingRounds === 0){
    imgContainer.removeEventListener('click', handleClick);
    return;
  }
  renderImgs();

}

function handleShowResults(){
  if(votingRounds === 0){
    for(let haha = 0; haha < productArray.length; haha++){
      let li = document.createElement('li');

      li.textContent = `${goatArray[i].goatName} had ${goatArray[i].views} votes and was selected ${goatArray[i].clicks} times.`;
      resultsList.appendChild(li);
    }
  }
}

// <------------------ EVENT LISTENER ------------------>


imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
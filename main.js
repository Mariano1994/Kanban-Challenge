
// Selection all elements to add new Card
const addNewCardButton = document.querySelector('.add-card-button');
const cardTitle = document.querySelector('.card-title');
const cardDescription = document.querySelector('.card-description');
const entryCards = document.querySelector('.input');



const myCards = []

// CARD CONSTRUCTOR
const Card = function(title, description) {
  this.title = title;
  this.description = description;
}

// FUNCTION TO CREATE A NEW CARD
const createNewCard = function(title, description) {
  const card = Object.create(Card.prototype);
  card.title = title;
  card.description = description;

  return card;
}

// ADDING NEW CARD
addNewCardButton.addEventListener('click', function(e) {
  e.preventDefault();

  const newCard = createNewCard(cardTitle.value, cardDescription.value);
  myCards.push(newCard);
  let cardHtml = '';
  
  myCards.map(function(card){
    // Creating HTML Element
    cardHtml = `
    <div class="card" draggable="true">
      <strong> ${card.title} </strong>
      <p>
       ${card.description}
     </p>
     <div class="tag">
      <span>rocketseat</span>
      <span>challenge</span>
     </div>
   </div>`
 
  });

  // Attach the html element to the cards grid
  entryCards.insertAdjacentHTML('afterbegin', cardHtml);
  
  // Invoke funtion to close the modal window
  closeModal();
  dragAndDrop();

})

const clearInputs = function() {
cardTitle.value = '';
cardDescription.value = '';
}




// =============================
// MODAL FUCNTIONALITIES
// =============================

//  Selecting all Elements


const openModalButton = document.querySelector('#new-card');
const closeModalButton = document.querySelector('.close-modal');
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');

// funtion to Open Modal
const openModal = function () {
  modalElement.classList.remove('hidden');
  overlayElement.classList.remove('hidden');
};

// Function to close modal
function closeModal() {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
  clearInputs();
};

// Opening Modal
openModalButton.addEventListener('click', openModal);

// Closing Modal clicking in X button
closeModalButton.addEventListener('click', closeModal);

// Closing Modal clicking on overlay zone
overlayElement.addEventListener('click', closeModal);

// Closing Modal Clicking in Escape(ESC) key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalElement.classList.contains('hidden')) {
    closeModal();
  }
});


// FUNCITON TO DRAG AND DROP
function dragAndDrop() {

  const cards = document.querySelectorAll('.card');
  const dropZones = document.querySelectorAll('.card-wrapper');


// Functions when dragging Cards 

  const dragStart = function() {
  dropZones.forEach(dropZone => dropZone.classList.add('highlight'));
  this.classList.add('is-dragging');
  };

  const dragEnd = function() {
  dropZones.forEach(dropZone => dropZone.classList.remove('highlight'));
  this.classList.remove('is-dragging');
 }

 cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
 })


 // FUNCTION TO DROPZONES
const dragOver = function() {

  this.classList.add('over');


  const cardBeingDragged = document.querySelector('.is-dragging');
  this.appendChild(cardBeingDragged);
 }

const dragLeave = function() {
  this.classList.remove('over');
}

 dropZones.forEach(dropZone => {
  dropZone.addEventListener('dragover', dragOver);
  dropZone.addEventListener('dragleave', dragLeave);
 })

}

dragAndDrop();
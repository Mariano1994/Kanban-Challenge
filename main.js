// Selection all elements to add new Card
const addNewCardButton = document.querySelector('.add-card-button');
const cardTitle = document.querySelector('.card-title');
const cardDescription = document.querySelector('.card-description');
const entryCards = document.querySelector('.input');


// CARD CONSTRUCTOR
const myCards = []
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
 
  
  myCards.map(function(card){
    // Creating HTML Element
    const cardHtml = `
    <div class="card">
      <strong> #${card.title} 🧑🏾‍💻</strong>
      <p>
       ${card.description}
     </p>
     <div class="tag">
      <span>rocketseat</span>
      <span>challenge</span>
     </div>
   </div>`
  
  // Attach the html element to the cards grid
  entryCards.insertAdjacentHTML('afterbegin', cardHtml);
  });

  // Invoke funtion to close the modal window
  closeModal()

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
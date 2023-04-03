// Seleting Elements

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
const closeModal = function () {
  modalElement.classList.add('hidden');
  overlayElement.classList.add('hidden');
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

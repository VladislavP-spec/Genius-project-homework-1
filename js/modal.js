const modal = document.querySelector('.backdrop');
const openModalButton = document.querySelector('.modal__open-button');
const closeModalButton = document.querySelector('.modal__close-button');

const toggleModal = () => {
	modal.classList.toggle('is-hidden');
};

openModalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);
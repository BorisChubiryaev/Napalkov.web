const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.rewiew');
const closePopup = popup.querySelector('.popup__close');

const onPopup = function() {
    popup.classList.toggle('popup_opened');
};

const offPopup = function() {
    popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', onPopup);
closePopup.addEventListener('click', offPopup);


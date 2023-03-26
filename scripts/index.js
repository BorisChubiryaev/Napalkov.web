import { Card } from './Card.js';
import { FormValidator } from "./FormValidator.js";

const selectors = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_invalid',
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_is-active",
};

const popupEdit = document.querySelector('.popup_profile');
const nameInput = document.querySelector('input[name="name"]');
const aboutInput = document.querySelector('input[name="about"]');
const usName = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const formEdit = document.querySelector('.popup__container-profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const popupEditClose = document.querySelector('.popup__close-edit');

const popupAdd = document.querySelector('.popup_add');
const formAdd = document.querySelector('.popup__container-card');
const inputPlace = document.querySelector('.popup__container-input-name');
const inputUrl = document.querySelector('.popup__container-input-url');
const popupAddClose = document.querySelector('#popup__close_card');
const addButton = document.querySelector('.profile__add-button');

const photo = document.querySelector('.popup_picture');
const imageClose = document.querySelector('.popup__close-image');

const elementsList = document.querySelector('.elements__list');

const popUpImg = document.querySelector('.popup_picture');
const popUpPicture = popUpImg.querySelector('.popup__image');
const popUpText = popUpImg.querySelector('.popup__image-description');

const initialCards = [
  {
    name: 'Миша',
    link: 'https://sun9-east.userapi.com/sun9-18/s/v1/if2/y8NHb0zVNi-TU_WGU0R8eF3JqQZpn4LcE2qUESbcPdGpP6oCIyRlUtvftWqHCsGt8_KTNlHAtt3_7a5alF7Wr283.jpg?size=322x574&quality=96&type=album'
  },
  {
    name: 'School',
    link: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/43c8AIOEy7ivwnIMU1fMDZD1sMwfFiM5uyeeMmtLNC32AuMlx53N03xuQ3yCFB61cvfmjVu5.jpg?size=650x599&quality=96&type=album'
  },
  {
    name: 'Котенок',
    link: 'https://sun9-north.userapi.com/sun9-88/s/v1/if1/VLqmvuWgyiSxdg_m5aRel0IlMzQakOZx6jrT7sVLzF24ZyBTE6pT6s5A-FRkg-UyuxpP-ctI.jpg?size=604x579&quality=96&type=album'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function handleCardClick(elementTitle, elementSrc, elementAlt) {
  popUpText.textContent = elementTitle;
  popUpPicture.src = elementSrc;
  popUpPicture.alt = elementAlt;
  openPopup(popUpImg);
}

function closeByEsc(event) {
  if (event.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
  }
}

function closeByOverlayClick(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
      closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closeByEsc);
  popup.addEventListener('mousedown', closeByOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeByEsc);
  popup.removeEventListener('mousedown', closeByOverlayClick);
}

function editPopupProfile(evt) {
  evt.preventDefault();
  nameInput.value = usName.textContent;
  aboutInput.value = description.textContent;
  openPopup(popupEdit);
}

function editPopupProfileSave(evt) {
  evt.preventDefault();
  usName.textContent = nameInput.value;
  description.textContent = aboutInput.value;
  closePopup(popupEdit);
}

const createCard = (data, templateSelector, handleCardClick) => {
    return new Card(data, templateSelector, handleCardClick);
}
  
const renderInitialCards = () => {
  initialCards.forEach(item => {
    const cardElement = createCard(item, '#template-card', handleCardClick);
    const card = cardElement.generateCard();
    elementsList.append(card);
  })
}

renderInitialCards();

formAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  const cardElement = createCard({name: inputPlace.value, link: inputUrl.value }, '#template-card', handleCardClick);
    elementsList.prepend(cardElement.generateCard());
    closePopup(popupAdd);
});

const formEditProfile = document.querySelector(".popup_profile");
const formEditProfileValidator = new FormValidator(selectors, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddCard = document.querySelector(".popup_add");
const formAddCardValidator = new FormValidator(selectors, formAddCard);
formAddCardValidator.enableValidation();

addButton.addEventListener('click', () => {
  formAdd.reset();
  formAddCardValidator.restartFormValidation();
  openPopup(popupAdd);
});

popupAddClose.addEventListener('click', () => closePopup(popupAdd));
buttonEdit.addEventListener('click', editPopupProfile);
formEdit.addEventListener('submit', editPopupProfileSave);
popupEditClose.addEventListener('click', () => closePopup(popupEdit));
imageClose.addEventListener('click', () => closePopup(photo));
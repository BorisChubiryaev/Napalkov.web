export class Card {
	constructor(data, templateSelector, handleCardClick) {
	  this._name = data.name;
	  this._link = data.link;
	  this._alt = data.alt;
	  this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick
	}
	
	_getTemplateCardElement() {
	  const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
	
	  return cardElement;
	}
	
	_handleToggleLikeCard() {
	  this._like.classList.toggle('element__like_active');
	}
	
	_handleDeleteCard() {
	  this._element.remove();
	}
	
	_handlePopUpBigImg() {
	  popUpPicture.setAttribute('src', this._link);
	  popUpPicture.setAttribute('alt', this._name);
	  popUpText.textContent = this._name;
	  openPopup(popUpImg);
	}
	
	_setEventListeners() {
	  this._element.querySelector('.element__like').addEventListener('click', () => {
	    this._handleToggleLikeCard();
	  });
	  this._element.querySelector('.element__delete').addEventListener('click', () => {
	    this._handleDeleteCard();
	  });
	  this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link, this._alt)
	  });
      this._like = this._element.querySelector('.element__like');
	}
	
	generateCard() {
	  this._element = this._getTemplateCardElement();
	  this._setEventListeners();
	
	  this._cardImg = this._element.querySelector('.element__photo');
	  this._cardImg.src = this._link;
	  this._cardImg.alt = this._name;
	
	  this._element.querySelector('.element__title').textContent = this._name;
	  return this._element;
	}
}
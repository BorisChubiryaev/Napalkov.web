const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.rewiew');
const closePopup = popup.querySelector('.popup__close');
// const toRight = document.querySelector('.rigtBtn')
// let container = document.querySelector('.container')


const onPopup = function() {
    popup.classList.toggle('popup_opened');
};

const offPopup = function() {
    popup.classList.remove('popup_opened');
}

openPopup.addEventListener('click', onPopup);
closePopup.addEventListener('click', offPopup);

let hg = document.getElementsByClassName('hg');
console.log(hg)
let move = 0;
function plus(){
    move -= 210;
    hg[0].style.marginLeft = move + 'px';  
}
function minus(){
    move += 210;
    hg[0].style.marginLeft = move + 'px';

}
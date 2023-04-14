const popup = document.querySelector('.popup');
const popupCont = document.querySelector('.popupCont');
const openPopupRew = document.querySelector('.rewiew');
const openPopupCont = document.querySelector('.contacts');
const closePopup = document.querySelector('.popup__close');
const clscont = document.querySelector('.clscont');


const onPopup = function() {
    popup.classList.toggle('popup_opened');
};
const offPopup = function() {
    popup.classList.remove('popup_opened');
}

const onPopupCont = function() {
  popupCont.classList.toggle('popup_opened');
};
const offPopupCont = function() {
  popupCont.classList.remove('popup_opened');
}


openPopupRew.addEventListener('click', onPopup);
openPopupCont.addEventListener('click', onPopupCont);
closePopup.addEventListener('click', offPopup);
clscont.addEventListener('click', offPopupCont);

var totalWidth = 0;

$('.slider-item').each(function(index) {
    totalWidth += parseInt($(this).outerWidth(true), 10);
});

$('.slider-win').width(totalWidth);

$('#sl-next').on('click', function(){
  
  
  var $this = $(this),
      $slider = $this.closest('.slider'),
      $sliderWin = $slider.find('.slider-win'),
      item = $sliderWin.find('.slider-item'),
      pos = item.outerWidth(true); 
  
  
  if($sliderWin.css('margin-left') <= '-1200px'){
    $sliderWin.animate(
      {'margin-left': '0px'}, 
      1000
    ); 
  } else {
    $sliderWin.animate(
      {'margin-left': '-='+pos}, 
      1000
    ); 
  }
  
  
});

$('#sl-prev').on('click', function(){
  
  
  var $this = $(this),
      $slider = $this.closest('.slider'),
      $sliderWin = $slider.find('.slider-win'),
      item = $sliderWin.find('.slider-item'),
      pos = item.outerWidth(true),
      posX = $sliderWin.offset().left; 
    
    if(posX <= 0){
      $sliderWin.animate(
        {'margin-left': '+='+pos}, 
        1000
      );  
    } else {
      $sliderWin.animate(
        {'margin-left': '0px'},  
        1000
      ); 
    }
    
  
});
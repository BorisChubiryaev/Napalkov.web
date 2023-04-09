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
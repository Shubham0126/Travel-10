
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      
      $('.navigation').addClass('fixed-top')
  } else {
      
      $('.navigation').removeClass('fixed-top')
  }
});


const subs_cont_elm = document.getElementById("subs-cont");
const btn_sub_close = document.getElementById("subs-close");

btn_sub_close.addEventListener("click", () => {
  subs_cont_elm.classList.remove("show");

  /* Code To Show Subscribe Modale After 2 Seconds */
  setTimeout(() => {
    subs_cont_elm.classList.add("show");
  }, 1000 * 5);
});





$(document).ready(function() {

    // required elements
    var imgPopup = $('.img-popup');
    var imgCont  = $('.container__img-holder');
    var popupImage = $('.img-popup img');
    var closeBtn = $('.close-btn');
  
    // handle events
    imgCont.on('click', function() {
      var img_src = $(this).children('img').attr('src');
      imgPopup.children('img').attr('src', img_src);
      imgPopup.addClass('opened');
    });
  
    $(imgPopup, closeBtn).on('click', function() {
      imgPopup.removeClass('opened');
      imgPopup.children('img').attr('src', '');
    });
  
    popupImage.on('click', function(e) {
      e.stopPropagation();
    });
    
  });
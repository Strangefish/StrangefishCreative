


$(document).ready(function() {



  $('.carousel').slick({
    slidestoShow: 1,
    slidestoScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    draggable: false,
    pauseonFocus: false,
    pauseonHover: true,
    infinite: true,
    adaptiveHeight: false,
});


var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    lastScrollTop = scrollTop;
  } else if (lastScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollTop = scrollTop;
  }
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("myNav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};


});

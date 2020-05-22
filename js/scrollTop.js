$(document).ready(function () {



  $(window).scroll(function () {
    if($(this).scrollTop() > 1000) {
      $('#buttonScrollTop').fadeIn();
    } else {
      $('#buttonScrollTop').fadeOut();
    }
  });


  $('#buttonScrollTop').hide().click(function () {
    $('html ,body').animate({scrollTop: 0}, 1000);
  });
});
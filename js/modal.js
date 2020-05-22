$(document).ready(function () {
  var link = $('.portfolio__button');
  link.on('click', function (e) {
    e.preventDefault();
    var modalName = $(this).attr('data-project') + '_modal';
    var modal = $(modalName);
    modal.addClass('modal_active');
  });
  $('.modal__close').on('click', function (e) {
    e.preventDefault();
    $('.modal').each(function () {
      $(this).removeClass('modal_active');
    })
  })
});

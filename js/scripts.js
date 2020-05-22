
//инициализация wowJS анимации

new WOW().init();



//slick слайдер
$(document).ready(function () {
  $('.feedback__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: false,
    dotsClass: 'feedback__dots',
    prevArrow: '<i class="fas fa-arrow-circle-left" style="z-index: 5; display: block; position: absolute; left: -50px; top: 150px;" ></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right" style="z-index: 5; display: block; position: absolute; right: -40px; top: 150px;"></i>',

    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }]
  });
});

$(document).ready(function(){
  //валидация формы
  $('#offer__form').validate({
    errorClass: 'invalid',
    errorElement: 'div',
    rules: {
      username: {
        required:true,
        minlength: 2,
        maxlength: 15,
      },
      phone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      username: {
        required: 'Введите ваше имя',
        minlength: jQuery.validator.format("Нужно ввести минимум {0} символа"),
        maxlength: jQuery.validator.format("Максимальное колличество символов: {0}")
      },
      phone: {
        required: 'Введите ваш телефон',
      },
      email: {
        required: 'Email обязателен для ввода',
        email: 'Введите email в формате example@mail.com',
      },
    }

  });
  $('#offer__phone').mask("+7 (999) 999-99-99");
  $('#brif-form').validate({
    errorClass: 'invalid',
    errorElement: 'div',
    rules: {
      username: {
        required:true,
        minlength: 2,
        maxlength: 15,
      },
      phone: 'required',
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      username: {
        required: 'Введите ваше имя',
        minlength: jQuery.validator.format("Нужно ввести минимум {0} символа"),
        maxlength: jQuery.validator.format("Максимальное колличество символов: {0}")
      },
      phone: {
        required: 'Введите ваш телефон',
      },
      email: {
        required: 'Email обязателен для ввода',
        email: 'Введите email в формате example@mail.com',
      },
    }

  });
  $('.phone').mask("+7 (999) 999-99-99");
  //обработка и отправка формы через AJAX
$('#offer__form').on('submit', function (e) {
  e.preventDefault();
  $.ajax({
    url: 'mail.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function (data) {
      console.log(data);
    }

  })
});
  //слайдер на owl carousel
  /*    $(".owl-carousel").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        nav: true,
        margin: 30,
        navText: ['<div class="arrows__left"><img src="img/portfolio/left-arrow.png" alt="стрелка влево"></div>',
          '<div class="arrows__right"><img src="img/portfolio/right-arrow.png" alt="стрелка вправо"></div>'
        ],
        responsive: {
            0: {
              items: 1,
            },
          768: {
              items:2,
          },
          1200: {
              items:3,
          }
        }

      });*/
});
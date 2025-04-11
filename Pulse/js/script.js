$(document).ready(function(){
    $('.carousel-inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="Image/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="Image/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false 
                }
            }
        ]
      });
      $('ul.catalog-tabs').on('click', 'li:not(.catalog-tab-active)', function() {
        $(this)
          .addClass('catalog-tab-active').siblings().removeClass('catalog-tab-active')
          .closest('div.container').find('div.catalog-content').removeClass('catalog-content-active').eq($(this).index()).addClass('catalog-content-active');
    }); 
    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item-content').eq(i).toggleClass('catalog-item-content-active');
                $('.catalog-item-list').eq(i).toggleClass('catalog-item-list-active');
            })
        });
    };

    toggleSlide('.catalog-item-link');
    toggleSlide('.catalog-item-back');

    //Modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal-close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button-mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal-descr').text($('.catalog-item-subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });
 
     function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Будь ласка, введіть своє ім'я",
                  minlength: jQuery.validator.format("Введіть {0} символу!")
                },
              phone: "Будь ласка, введіть свій номер телефону",
              email: {
                required: "Будь ласка, введіть свою пошту",
                email: "Неправильно введено адресу пошти"
              }
          }
      });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99"); 

  $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else{
      $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
});
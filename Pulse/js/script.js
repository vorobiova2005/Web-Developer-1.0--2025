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
  });
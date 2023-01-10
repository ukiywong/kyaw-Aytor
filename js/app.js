$(function () {
      //--- Ready function Start ---//

      //--- Loader - Start ---//
      $(window).on('load', function () {
        $('#preloader').fadeOut(2000);
      });
      //--- Loader - End ---//

      //--- Back to top & hov menu Start ---//
      $(window).on('scroll', function (){
      //--- Back to top ---//
        var scrollsize = $(window).scrollTop()
        if(scrollsize > 600){
        $('#back_btn').show(500)
        }else{
        $('#back_btn').hide(500)
        };
      //---BVack to top ---//
      //--- Hov menu ---//
        if(scrollsize > 100) {
          $('#nav').addClass('active')
        }else{
          $('#nav').removeClass('active')
        };
      //--- Hov menu ---//
      });
      $('#back_btn').on('click', function (){
        $('html,body').animate({
          scrollTop:0,
        }, 1500);
      });
      //--- Back to top & hov menu - End---//

      //--- Banner - Start ---//
      $('.slide_banner').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500,
        dots: true,
        dotsClass:'slider_dots'
      });
      //--- Banner - End ---//

      //--- New product - Start ---//
      $('.product_slider').slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left slide_icon"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right slide_icon"></i>',
      });
      //--- New product - End---//

      //--- Deals day - Start ---//
      //--- Timer-code - Start---//
      $('#deal_timer').countdown('2023/01/31', function(event) {
        var $this = $(this).html(event.strftime(''       
          +'<div class="timer_info"><span>%D</span><span>Days</span></div>'+
             '<span class="saparator">:</span>'+
           '<div class="timer_info"><span>%H</span><span>Hour</span></div>'+
             '<span class="saparator">:</span>'+
           '<div class="timer_info"><span>%M</span><span>Minute</span></div>'+
             '<span class="saparator">:</span>'+
           '<div class="timer_info"><span>%S</span><span>Sec</span></div>'
        ));
      });
      //--- Timer-code - End ---//
      //--- Banner-code - Start ---/
      $('.deal_banner_slider').slick({
        slidesToShow:2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500,
        dots: true,
        dotsClass:'slider_dots'
      });
      //--- Banner-code - End ---//
      //--- Deals day - End ---//

      //--- Latest News - Sart ---//
      $('.news_slider').slick({
        slidesToShow:4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500,
        dots: true,
        dotsClass:'slider_dots'
      });
      //--- Latest News - End ---//
      //--- Ready function End ---//
    })
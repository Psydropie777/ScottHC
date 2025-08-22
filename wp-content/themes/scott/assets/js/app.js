"use strict";

(function ($) {
  'use strict';

  jQuery(document).on("ready", function () {
	  
	// Active Slick Nav 
	$('#navigation').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce", //available with jQuery UI
		prependTo:'#mobile_menu',
		closeOnClick: true,
		easingClose:"swing", 
		easingOpen:"swing", 
		openedSymbol: "&#9660;",
		closedSymbol: "&#9658;" 	
	});	  
	
	/*Scroll Menu*/
	$('#navigation a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1500);
		e.preventDefault();
	});	
    /*---------------====================
    01. paralax
    ================-------------------*/
    function initparallax() {
      var a = {
        Android: function Android() {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function BlackBerry() {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function iOS() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function Opera() {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function Windows() {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function any() {
          return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
      };
      var trueMobile = a.any();

      if (null == trueMobile) {
        var b = new Scrollax();
        b.reload();
        b.init();
      }
    }

    initparallax();
    /*---------------====================
    02.banner elements paralax
    ================-------------------*/

    $(".single-rt-banner").mousemove(function (e) {
      parallaxIt(e, ".mockup-img-1", 40);
    });

    function parallaxIt(e, target, movement) {
      var $this = $(".single-rt-banner");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;
      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }
	
	$("#navigation li").addClass("nav-item");
	$("#navigation li a").addClass("nav-link");
	
 
    /*---------------====================
    04.Magnify Popup
    ================-------------------*/

    $('.img-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    $('.play-video').magnificPopup({
      type: 'iframe',
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
    /*---------------====================
    05.owl Carosle activation
    ================-------------------*/

    if ($(".banner-brands-active").length > 0) {
      $('.banner-brands-active').owlCarousel({
        loop: true,
        margin: 20,
        mouseDrag: true,
        //autoplay: true,
        //autoplayTimeout: 2000,
        //autoplaySpeed: 50000,
        slideTransition: 'linear',
        responsive: {
          210: {
            items: 1
          },
          320: {
            items: 1
          },
          479: {
            items: 2
          },
          768: {
            items: 3
          },
          980: {
            items: 4
          },
          1199: {
            items: 4
          }
        }
      });
    } // dashbord-carosel-active 


    if ($(".dashbord-carosel-active").length > 0) {
      $('.dashbord-carosel-active ').owlCarousel({
        loop: true,
        margin: 10,
        mouseDrag: true,
        stagePadding: 0,
        center: true,
        responsive: {
          210: {
            items: 1
          },
          320: {
            items: 1
          },
          479: {
            items: 1
          },
          768: {
            items: 1
          },
          980: {
            items: 1
          },
          1199: {
            items: 2 //stagePadding: 450,

          },
          1600: {
            items: 3 // stagePadding: 500,

          },
          1900: {
            items: 1,
            stagePadding: 500
          }
        }
      });
    } // testimonials active


    if ($(".testimonials-active").length > 0) {
      $('.testimonials-active').owlCarousel({
        loop: true,
        margin: 0,
        mouseDrag: true,
        responsive: {
          210: {
            items: 1
          },
          320: {
            items: 1
          },
          479: {
            items: 1
          },
          768: {
            items: 1
          },
          980: {
            items: 1
          },
          1199: {
            items: 1
          }
        }
      });
    } // testimoanials two active


    if ($(".tesimonial2-active").length > 0) {
      $('.tesimonial2-active').owlCarousel({
        loop: true,
        margin: 0,
        mouseDrag: true,
        responsive: {
          210: {
            items: 1
          },
          320: {
            items: 1
          },
          479: {
            items: 1
          },
          768: {
            items: 2
          },
          980: {
            items: 3
          },
          1199: {
            items: 3
          }
        }
      });
    } 
	
	// interface active

		$('.interface-active').slick({
			centerMode: true,
			centerPadding: '100px',
			infinite: true,
			draggable: true,
			touchMove: true,
			dots: true,
			slidesToShow: 5,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},			
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		});
			
    /*---------------====================
    06.Counter Active
    ================-------------------*/


    if ($(".counter").length > 0) {
      $('.counter').counterUp({
        delay: 10,
        time: 4000
      });
    }
    /*---------------====================
    07.Sticky Menu
    ================-------------------*/


    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();

      if (scroll < 200) {
        $(".rt-sticky").removeClass("rt-sticky-active fadeInDown animated");
      } else {
        $(".rt-sticky").addClass("rt-sticky-active fadeInDown animated");
      }
    });
    /*---------------====================
       08.Scroll Up
       ================-------------------*/

    $.scrollUp({
      scrollText: '<i class="icofont icofont-swoosh-up"></i>'
    });
  });
})(jQuery);
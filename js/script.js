$(document).ready(function(){


      /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start  header~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */

    $(".navbar_bt_bar").click(function() {
        $(".navbar_").toggle(500);
        $(".moboverlay").fadeIn('500');
        $(".bars_icon").addClass("close_");
				$("body").addClass("over");
    });

    $(".moboverlay").click(function() {
        $(".navbar_").toggle(500);
        $(".moboverlay").fadeOut('500');
        $(".bars_icon").removeClass("close_");
				$("body").removeClass("over");

    });
    $(".anc_hover").click(function() {
        $(".ul_menu").slideToggle(400);
    })
    $(".dropdown-lang").click(function() {
        $(".dropdown-content-lang").slideToggle(400);
    })
    $(".close_n").click(function(){
      $(".moboverlay").trigger("click");
    
    });

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end  header~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */


  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start  best_seller~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

$('.best_seller .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 25,
    autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    responsive: {
        0: {
            items: 2,
            margin:15
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end  best_seller~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */



    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start Testimonials~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

$('.Testimonials .owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  rtl: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 2
      }
  }
})
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end Testimonials~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~wow~~~~~~~~~~~~~~~~~~~~~~~  */
new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.8s');


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~preloader~~~~~~~~~~~~~~~~~~~~~~~  */

$(window).load(function() {
  $(".preloader-sa").fadeOut();
});











});

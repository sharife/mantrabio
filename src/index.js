// JS Goes here - ES6 supported

import "./css/main.css";



$(function(){  // $(document).ready shorthand
  $('.fade-1').delay(10).animate({'opacity':'1'},700);
  $('.fade-2').delay(500).animate({'opacity':'1'},700);
  $('.fade-3').delay(1000).animate({'opacity':'1'},700);
  $('.fade-4').delay(1500).animate({'opacity':'1'},700);
  $('.fade-5').delay(2500).animate({'opacity':'1'},700);
  $('.fade-6').delay(3500).animate({'opacity':'1'},700);
  $('.zoom').addClass('scaler');
});



$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * .5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1', 'padding-top': '-10px'},350);
            }
        });
    });
});



function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top) {
        $('#stickThis').addClass('stick');
        $('#stick-here').height($('#stickThis').outerHeight());
    } else {
        $('#stickThis').removeClass('stick');
        $('#stick-here').height(0);
    }
}
$(function() {
    if ($('#stick-here')) {
      $(window).scroll(sticktothetop);
      sticktothetop();
    }
});



// $(function() {
//   var allowed = true;
//   var heading = $('figheading');
//   var output = $('figcaption');
//   $('g').each(function() {
//     var that = $(this);
//     that.on('mouseenter', function() {
//       allowed = true;
//       //$(this).attr('fill', '#08f');
//       //output.text($(this).attr('data-desc')); // Could grab a cool data-something description or link somewhere.
//     });
//     that.on('mouseleave', function() {
//       //$(this).attr('fill', '#d3d3d3');
//     });
//     that.on('click', function() {
//       //$(this).toggleClass('active'); Doesn't work with svg
//       var that = $(this);
//       // if (allowed === true) {
//       //   alert($(this).attr('data-desc'));
//       //   allowed = false;
//       // }
//       heading.text($(this).attr('data-title'));
//       output.text($(this).attr('data-desc'));
//       // (that.attr('data-active') === 'true') ? that.attr('data-active', 'false') : that.attr('data-active', 'true');      
//     });
//   });

// });



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
          
        });
      }
    }
  });
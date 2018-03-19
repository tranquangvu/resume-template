// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
//= require isotope.min


$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $($(this).attr('href'));
  if (id.size() === 0) return;
  e.preventDefault();
  $('body, html').animate({scrollTop: id.offset().top}, 1000);
});

$(window).scroll(function() {
    if(window.scrollY > 600) {
      $('.top-bar').addClass('active-bar');
    } else {
      $('.top-bar').removeClass('active-bar');
    }
});

function scrollToTop() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.scroll-btn').fadeIn();
    } else {
      $('.scroll-btn').fadeOut();
    }
  });

  $('.scroll-btn').click(function() {
    $('html, body').animate({scrollTop : 0},1000);
    return false;
  });
}

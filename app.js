'use strict';

$('.hamburger-menu-list').hide();
$('.about-text-mobile').hide();
$('.contact-text-mobile').hide();
$('.hamburger-button').click(function() {
  $('div.panel-content').fadeOut('slow');
  $('.hamburger-menu-list').fadeIn('fast', function() {
    // $('.hamburger-menu-list').hide();
  });
});

$('#about-link').click(function() {
  $('.contact-text-mobile').fadeOut('fast');
  $('.hamburger-menu-list').fadeOut('fast');
  $('.about-text-mobile').fadeIn('slow', function() {

  });
});

$('#work-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('.about-text-mobile').fadeOut('fast');
});

$('#contact-link').click(function() {
  $('.about-text-mobile').fadeOut('fast');
  $('.hamburger-menu-list').fadeOut('fast');
  $('.contact-text-mobile').fadeIn('slow', function() {

  });
});

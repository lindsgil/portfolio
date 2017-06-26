'use strict';

$('.hamburger-menu-list').hide();
$('.hamburger-button').click(function() {
  $('div.panel-content').fadeOut('slow');
  $('.hamburger-menu-list').fadeIn('fast', function() {
    // $('.hamburger-menu-list').hide();
  });
});

$('#about-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('#work-flow').fadeOut('fast');
  $('#about-text-mobile').fadeIn('slow');
});

$('#work-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('#work-cont').fadeIn();
});

$('#contact-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('#contact-cont').fadeIn();
});

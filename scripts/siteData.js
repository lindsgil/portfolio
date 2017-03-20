'use strict';

var sites = [];
var showAboutBox = {};

showAboutBox.handleAboutNav = function() {
  $('#about-nav').on('click', function() {
    $('.about-box').css('display', 'block');
  });
};

$('.site-nav').on('click', function() {
  $('.main-nav').show();
});

$('.social-icons').on('click', function() {
  $('.main-nav').show();
});

function Site (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.siteUrl = opts.siteUrl;
  this.info = opts.info;
  this.published = opts.published;
};
//
Site.prototype.toHtml = function() {
  var source = $('#work-display-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

exampleSiteData.forEach(function(obj) {
  sites.push(new Site(obj));
});

sites.forEach(function(a) {
  $('#site-display').append(a.toHtml());
});

showAboutBox.handleAboutNav();

'use strict';

(function(module) {
var sites = [];
var showAboutBox = {};

showAboutBox.handleAboutNav = function() {
  $('#about-nav').on('click', function() {
    $('.about-box').css('display', 'block');
    $('section#site-display').fadeOut();
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
  this.classMarker = opts.classMarker;
};

Site.prototype.toHtml = function() {
  let templateRender = Handlebars.compile($('#work-display-template').text());
  return templateRender(this);
};

Site.loadAll = function(rawData) {
  rawData.map(function(el) {
    Site.all.push(new Site(el));
  })
}

Site.fetchAll = function() {
  if (localStorage.rawData) {

    Site.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.getJSON('/data/portfolioData.json', function(response) {
      localStorage.setItem('rawData', JSON.stringify(response));
      Site.loadAll(response);
    })
    .done(function() {
      console.log('second success');
    })
    .fail(function(err) {
      console.log('error', err);
    });
  }
}


showAboutBox.handleAboutNav();
})(window);

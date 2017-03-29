'use strict';

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
<<<<<<< HEAD
}

Site.all = [];
=======
  this.classMarker = opts.classMarker;
};
>>>>>>> 374f1fb3c1b72c9922a91f64f240096ac2a0d40a
//
Site.prototype.toHtml = function() {
  let templateRender = Handlebars.compile($('#work-display-template').text());
  return templateRender(this);
};

Site.loadAll = function(rawData) {
  rawData.forEach(function(el) {
    Site.all.push(new Site(el));
  })
}

<<<<<<< HEAD
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

// exampleSiteData.forEach(function(obj) {
//   sites.push(new Site(obj));
// });
//
// sites.forEach(function(a) {
//   $('#site-display').append(a.toHtml());
// });
=======
sites.forEach(function(a) {
  $('' + a.classMarker).append(a.toHtml());
  console.log('' + a.classMarker);
});
>>>>>>> 374f1fb3c1b72c9922a91f64f240096ac2a0d40a

showAboutBox.handleAboutNav();

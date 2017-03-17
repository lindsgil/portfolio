'use strict';

var sites = [];

function ExampleSite (par) {
  this.title = par.title;
  this.category = par.category;
  this.siteUrl = par.siteUrl;
  this.published = par.published;
  this.info = par.info;
};

ExampleSite.prototype.toHtml = function() {
  var $newExampleSite = $('div.temporary').clone();
  $newExampleSite.removeClass('temporary');
  $newExampleSite.find('h1').html(this.title);
  $newExampleSite.find('a').attr('href', this.siteUrl);
  $newExampleSite.find('p').html(this.info);
  return $newExampleSite;
};

exampleSiteData.forEach(function(siteExampleObject) {
  // REVIEW: Take a look at this forEach method; This may be the first time we've seen it.
  sites.push(new ExampleSite(siteExampleObject));
});

exampleSiteData.forEach(function(a) {
  $('#site-display').append(a.toHtml());
});

ExampleSite();

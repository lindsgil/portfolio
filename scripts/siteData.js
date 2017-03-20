var sites = [];
var exampleSiteData = {};
var showAboutBox = {};

showAboutBox.handleAboutNav = function() {
  $('#about-nav').on('click', function() {
    $('.about-box').css('display', 'block');
  });
};

function ExampleSite (par) {
  this.title = par.title;
  this.siteUrl = par.siteUrl;
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
  sites.push(new ExampleSite(siteExampleObject));
});

exampleSiteData.forEach(function(a) {
  $('#site-display').append(a.toHtml());
});

showAboutBox.handleAboutNav();

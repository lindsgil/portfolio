var sites = [];
var exampleSiteData = {};
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


// function ExampleSite (par) {
//   this.title = par.title;
//   this.category = par.category;
//   this.siteUrl = par.siteUrl;
//   this.info = par.info;
//   this.published = par.published;
// };
//
// ExampleSite.prototype.toHtml = function() {
//   var $newExampleSite = $('div.temporary').clone();
//   $newExampleSite.removeClass('temporary');
//   $newExampleSite.find('h1').html(this.title);
//   $newExampleSite.find('a').attr('href', this.siteUrl);
//   $newExampleSite.find('p').html(this.info);
//   return $newExampleSite;
// };
//
// exampleSiteData.forEach(function(siteExampleObject) {
//   sites.push(new ExampleSite(siteExampleObject));
// });
//
// exampleSiteData.forEach(function(a) {
//   $('#site-display').append(a.toHtml());
// });

showAboutBox.handleAboutNav();

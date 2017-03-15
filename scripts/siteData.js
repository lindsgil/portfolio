'use strict';

var photos = [];

function Photo (par) {
  this.title = par.title;
  this.category = par.category;
  this.picUrl = par.picUrl;
  this.published = par.published;
  this.info = par.info;
};

Photo.prototype.toHtml = function() {
  var $newPhoto = $('div.temporary').clone();
  $newPhoto.removeClass('temporary');
  $newPhoto.find('h1').html(this.title);
  $newPhoto.find('img').attr('src', this.picUrl);
  $newPhoto.find('p').html(this.info);
  return $newPhoto;
};

'use strict';

(function(module) {
  const workController = {};

  workController.init = function() {
    Site.fetchAll();
    $('#site-display').show();
  };

  module.workController = workController;
})(window);

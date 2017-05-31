define(function(require, exports, module){
  'use strict';
  var Backbone = require('backbone');

  module.exports = Backbone.View.extend({
    initialize: function(o) {
      this.options = o;
      this.config = o.config || {};
      this.pfx = this.config.stylePrefix || '';
      this.ppfx = this.config.pStylePrefix || '';
      this.className = this.pfx + 'asset';
      this.listenTo( this.model, 'destroy remove', this.remove);
    },
  });

});
define(function(require, exports, module){
  'use strict';
  var Backbone = require('backbone');
  var Device = require('./Device');

    module.exports = Backbone.Collection.extend({

      model:  Device,

    });
});
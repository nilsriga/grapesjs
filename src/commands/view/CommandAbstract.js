define(function(require, exports, module){
  'use strict';
  var Backbone = require('backbone');
		/**
		 * @class CommandAbstract
		 * @private
		 * */
		module.exports = Backbone.View.extend({

			/**
			 * Initialize method that can't be removed
			 * @param	{Object}	o Options
			 * @private
			 * */
			initialize: function(o) {
				this.config				= o || {};
				this.editorModel 	= this.em = this.config.em || {};
				this.pfx					= this.config.stylePrefix;
				this.ppfx					= this.config.pStylePrefix;
				this.hoverClass		= this.pfx + 'hover';
				this.badgeClass		= this.pfx + 'badge';
				this.plhClass			= this.pfx + 'placeholder';
				this.freezClass		= this.ppfx + 'freezed';

				this.canvas = this.em.get && this.em.get('Canvas');

				if(this.em.get)
					this.setElement(this.getCanvas());

				if(this.canvas){
					this.$canvas = this.$el;
					this.$wrapper = $(this.getCanvasWrapper());
					this.frameEl = this.canvas.getFrameEl();
					this.canvasTool = this.getCanvasTools();
					this.bodyEl = this.getCanvasBody();
				}

				this.init(this.config);
			},

			/**
			 * On frame scroll callback
			 * @param  {[type]} e [description]
			 * @return {[type]}   [description]
			 */
			onFrameScroll: function(e){},

			/**
			 * Returns canval element
			 * @return {HTMLElement}
			 */
			getCanvas: function(){
				return this.canvas.getElement();
			},

			/**
			 * Get canvas body element
			 * @return {HTMLElement}
			 */
			getCanvasBody: function(){
				return this.canvas.getBody();
			},

			/**
			 * Get canvas wrapper element
			 * @return {HTMLElement}
			 */
			getCanvasWrapper: function(){
				return this.canvas.getWrapperEl();
			},

			/**
			 * Get canvas wrapper element
			 * @return {HTMLElement}
			 */
			getCanvasTools: function(){
				return this.canvas.getToolsEl();
			},

			/**
       * Get the offset of the element
       * @param  {HTMLElement} el
       * @return {Object}
       */
      offset: function(el){
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + el.ownerDocument.body.scrollTop,
          left: rect.left + el.ownerDocument.body.scrollLeft
        };
      },

			/**
			 * Callback triggered after initialize
			 * @param	{Object}	o 	Options
			 * @private
			 * */
			init: function(o){},

			/**
			 * Method that run command
			 * @param	{Object}	em 		Editor model
			 * @param	{Object}	sender	Button sender
			 * @private
			 * */
			run: function(em, sender) {},

			/**
			 * Method that stop command
			 * @param	{Object}	em Editor model
			 * @param	{Object}	sender	Button sender
			 * @private
			 * */
			stop: function(em, sender) {},

		});
	});
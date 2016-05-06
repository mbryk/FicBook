define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/headerTemplate.html' 
], function($, _, Backbone, headerTemplate){
  
  var HeaderView = Backbone.View.extend({
    el: '.header',
    initialize: function () {
      
    },
    render: function () {
            var that = this;
            $(this.el).html(headerTemplate);
    },
    selectMenuItem: function (menuItem) {
        $('.nav li').removeClass('active');
        if (menuItem) {
            $('.' + menuItem).addClass('active');
        }
    }
  });
  return HeaderView;

});

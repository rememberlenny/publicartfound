
"use strict";


(function($){
  var _ = window._;
  var Backbone = window.Backbone;

  var GraffAnswer = function(){
    this.initialize();
    this.events();
  }

  GraffAnswer.prototype.initialize = function(){
    console.log('Running');
  }

  GraffAnswer.prototype.events = function(){
    var self = this;
    $('#new-answer').on('keypress', function(e){ self.detectKey(e); });
  }

  GraffAnswer.prototype.detectKey = function(e){
    console.log(e);
    this.input = $('#new-answer').val();
  }

  // GraffAnswer.prototype.initialize = function(){}

  var graffApp = new GraffAnswer();
})(jQuery);
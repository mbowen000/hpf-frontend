HPF.App.module("Actions.Print", function(PrintAction, App, Backbone, Marionette, $, _) {
    "use strict";

    this.startWithParent = false;

    _.defaults(PrintAction, {
    	name: "Print",
    	label: "Print Results"
    });
    
    this.onStart = function() {
    	console.info("Starting Print Action Up...");
    }
 
 	PrintAction.execute = function(options) {
 		var route = "print";

 		var params = window.location.search;

 		window.open("print?" + params, "_blank");
 	}

 	PrintAction.Layout = Backbone.Marionette.LayoutView.extend({
 		template: JST['app/scripts/templates/actions/print-layout.ejs']
 	});

});
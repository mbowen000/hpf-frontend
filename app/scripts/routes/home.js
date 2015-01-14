/* global Nyphil */

HPF.App.module("AppRouter", function(AppRouter, App, Backbone, Marionette, $, _) {
	"use strict";

	/**
	 * Right now we're just instantiating most of the application in main.js - the router is here for flexibility later
	 */

	
	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			""		: "home"
		}
	});

	var Controller = Marionette.Controller.extend({
		// todo: this route should probably be renamed. will take some new params for options
		home: function() { 
			console.info("Home Route Hit");
		}
	});

	AppRouter.addInitializer(function() { 

		AppRouter.controller = new Controller();

		App.Router = new Router({
			controller: AppRouter.controller
		});

	});

});
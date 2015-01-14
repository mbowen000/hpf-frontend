HPF.App.module("Actions", function(Actions, App, Backbone, Marionette, $, _) {
    "use strict";

    this.startWithParent = true;

    // collections / models

	var ActionCollection = Backbone.Collection.extend({

	});

	// views

   	var ActionMenuActionView = Backbone.Marionette.ItemView.extend({
		template: JST["app/scripts/templates/action-menu/action-menu-action.ejs"],
		tagName: "li",
		attributes: { 
			role: "presentation"
		},
		events: {
			"click a" : "execute"
		},
		execute: function(options) {
			this.model.get("execute").apply(this, options);
		}
	});

	Actions.Menu = Backbone.Marionette.CompositeView.extend({
		template: JST["app/scripts/templates/action-menu/action-menu.ejs"],
		initialize: function(options) {
			var options = options || {};
			this.name = options.name || "Actions"
			var collection = this.collection = options.collection || new ActionCollection([]);
			this.actions = options.actions || [];

			_.each(this.actions, function(action){
				// add each module and start it if necessary
				var actionModule = HPF.App.Actions.submodules[action];
				if(actionModule) {
					collection.add(actionModule);
					actionModule.start();
				}
				else {
					console.error("Action Error: Trying to add an action that is not defined. Are you sure it has the right name?");
				}
			});
		},
		childView: ActionMenuActionView,
		childViewContainer: ".dropdown-menu",
		serializeData: function() { 
			return {
				name: this.name,
				id: this.cid + "-menu"
			}
		},
		onRender: function() { 
			if(this.collection.length === 0) {
				this.$("button").addClass("disabled");
			}
		}
	});

	

});
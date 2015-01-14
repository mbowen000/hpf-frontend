/* global HPF */
HPF.App.module("Layout", function(Layout, App, Backbone, Marionette, $, _) {
	"use strict";

	var GameCollection = Backbone.Collection.extend({
		url: function() {
			return "http://localhost/hpf/game";
		}
	});

	var Game = Backbone.Marionette.ItemView.extend({
		template: JST["app/scripts/templates/game.ejs"],
		serializeData: function() {
			return {

			}
		}
	});

	var TestView = Backbone.Marionette.CollectionView.extend({
		childView: Game
	});

	Layout.View = Backbone.Marionette.LayoutView.extend({
		template: JST["app/scripts/templates/layout.ejs"],
		regions: {
			"test" : ".test",
			"currentGame" : ".current-game"
		},
		onShow: function() { 
			var collection = new GameCollection();

			this.test.show(new TestView({
				collection: collection
			}));

			collection.fetch();

			this.currentGame.show(new HPF.App.Game.Layout());
		}
	});

});
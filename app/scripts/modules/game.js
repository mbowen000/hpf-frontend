HPF.App.module("Game", function(Game, App, Backbone, Marionette, $, _) {
	"use strict";

	var GameCollection = Backbone.Collection.extend({
		url: function() {
			return "http://localhost/hpf/game";
		}
	});

	var PlayerView = Backbone.Marionette.ItemView.extend({
		template: JST["app/scripts/templates/game/game-layout-player.ejs"]
	});

	var PlayersView = Backbone.Marionette.CollectionView.extend({
		childView: PlayerView
	});

	var TeamView = Backbone.Marionette.LayoutView.extend({
		template: JST["app/scripts/templates/game/game-layout-team.ejs"],
		initialize: function() { 
			this.playersView = new PlayersView({ collection: this.model.get("players") });
		},
		regions: {
			"players": ".players"
		},
		onShow: function() { 
			this.players.show(this.playersView);			
		}
	});

	Game.Layout = Backbone.Marionette.LayoutView.extend({
		template: JST["app/scripts/templates/game/game-layout.ejs"],
		regions: {
			teamOne: ".team-one",
			teamTwo: ".team-two"
		},
		initialize: function() { 
			// this.teamOneView = new Game.TeamView();
			this.collection = window.gc = new GameCollection();
			this.collection.fetch().done(function(collection) {
				
			});
			// derive team info from the game collection
			
		},
		onShow: function() {
			var self = this; 
			this.listenTo(this.collection, "sync", function(collection) { 

				this.teamOneModel = new Backbone.Model({ players: new Backbone.Collection([]) });
				this.teamTwoModel = new Backbone.Model({ players: new Backbone.Collection([]) });

				_.each(collection.models[0].attributes, function(val, key) { 
					if(key === "yO" || key === "yD") {
						self.teamOneModel.get("players").add(val);
					}
					else if(key === "bO" || key === "bD") {
						self.teamTwoModel.get("players").add(val);
					}
				});

				// calculate score ... bahhh
				

				this.teamOne.show(new TeamView({
					model: this.teamOneModel
				}));
				this.teamTwo.show(new TeamView({
					model: this.teamTwoModel
				}));
			});
			
		}
	});


});
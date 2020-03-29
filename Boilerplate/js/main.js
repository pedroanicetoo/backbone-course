var Song = Backbone.Model.extend({
	defaults: {
		listeners: 0
	}
});

// var Songs = Backbone.Collection.extend({
// 	model: Song
// });

var SongView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.onModelChange, this);
	},

	onModelChange: function(){ // action from the view for the onChange model 
		this.$el.addClass("someClass");
	},

	render: function() {
			this.$el.html(this.model.get("title") + " - Listeners: "+ this.model.get("listeners"));
			
			return this;
	}
});

// var SongsView = Backbone.View.extend({
// 	render: function() {
// 		var self = this;
// 		this.model.each(function(song) {
// 			var songView = new SongView({ model: song });
// 			self.$el.append(songView.render().$el);
// 		});
// 	}
// });

// var songs = new Songs([
// 	new Song({ title: "Blue and Green"}),
// 	new Song({ title: "So what"}),
// 	new Song({ title: "All Blues"})
// 	]);

var song = new Song({ title: "Blue and Green" });

var songView = new SongView({ el: "#container", model: song });

songView.render();

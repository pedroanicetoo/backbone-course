var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
// 	model: Song
// });

var SongView = Backbone.View.extend({
	events: {
		"click": "onClick",
		"click .bookmark": "onClickBookmark",

	},
	onClick: function(){
		console.log("Listen Clicked");
	},
	onClickBookmark: function(e){
		e.stopPropagation();
		console.log('Bookmark clicked')
	},

	render: function() {
			this.$el.html(this.model.get("title") + " <button>Listen </button> <button class='bookmark'>Bookmark</button>");
			
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

var songsView = new SongView({ el: "#container", model: song });

songsView.render();

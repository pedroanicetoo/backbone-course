var SongView = Backbone.View.extend({

	tagName: "span",

	className: "song",

	id: "1234",

	attributes: {
		"data-genre": "Jazz"
	},

	render: function(){
		this.$el.html("Hello World");

		return this
	}
});

var songView = new SongView();

$("#container").html(songView.render().$el);
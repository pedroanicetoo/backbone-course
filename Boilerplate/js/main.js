var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	Model: Song
});

var songs = new Songs([
		new Song({ title: "Song 1"}),
		new Song({ title: "Song 2"}),
		new Song({ title: "Song 3"})
]);

songs.add(new Song({ title: "Song 4" }));

//get specific model by client id
var firstSong = songs.at(0);

//get specific model by cid
var songWithIdC1 = songs.get("c1");

//Remove specific model
songs.remove(firstSong);

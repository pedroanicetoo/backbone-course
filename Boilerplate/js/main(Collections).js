var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
		model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }), { at: 0 });

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

var jazzSongs = songs.where({ genre: "Jazz" });

var firstJazzSong = songs.findWhere({ genre: "Jazz" });

console.log("jazzSongs", jazzSongs);

console.log("First Jazz Song", firstJazzSong);

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs);

var topDownloads = songs.filter(function(song){
		return song.get("downloads") > 100
});

console.log("Top Downloads", topDownloads);

songs.each(function(song) {
		console.log(song);
});

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
// 	Model: Song
// });

// var songs = new Songs([
// 		new Song({ title: "Song 1"}),
// 		new Song({ title: "Song 2"}),
// 		new Song({ title: "Song 3"})
// ]);

// songs.add(new Song({ title: "Song 4" }));

// //get specific model by client id
// var firstSong = songs.at(0);

// //get specific model by cid
// var songWithIdC1 = songs.get("c1");

// //Remove specific model
// songs.remove(firstSong);



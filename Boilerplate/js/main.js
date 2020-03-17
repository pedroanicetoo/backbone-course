


// INHERITANCE

// var Animal = Backbone.Model.extend({
// 	walk: function(){
// 		console.log("Animal walking...");
// 	}
// });

// var Dog = Animal.extend({
// 	walk: function(){
// 		Animal.prototype.walk.apply(this);
// 		console.log("Dog walking...")
// 	}
// });

// var dog = new Dog();

// dog.walk();

// var Song = Backbone.Model.extend({
// 	defaults: {
// 		genre: "Jazz"
// 	}
// });
// var song = new Song({
// 	title: "Blue in Green",
// 	artist: "Miles Davis",
// 	publishYear: 1959	
// });

// VALIDATION

// var Song = Backbone.Model.extend({
// 		validate: function(attrs) {
// 			if(!attrs.title)
// 					return "title is required";
// 		}
// });

// var song = new Song();

//song.isValid();
//var lastError = song.validationError;


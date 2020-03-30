var person = {
	name: "Pedro",

	walk: function() {
		this.trigger("walking", {
			speed: 1,
			startTime:"08:00"
		});
	}
};

_.extend(person, Backbone.Events);

person.once("walking", function(e){
	console.log("Person is walking");
	console.log("Event Args", e);
});

person.walk();
person.walk();
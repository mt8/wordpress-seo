self.value = "This is the value";

self.method = function() {
	console.log( "This will echo" );

	return "blaat";
};

self.registerCustomAssessment( "my-assessment", function() {
	console.log( "I am the assessment" );
} );

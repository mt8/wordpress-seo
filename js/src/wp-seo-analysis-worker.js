import { App } from "yoastseo";

let app;

function initialize( payload ) {
	console.log( "ARGS", payload );
}


function executeCommand( command, payload ) {
	switch ( command ) {
		case "initialize":
			initialize( payload );
			break;
	}
}

function router( message ) {
	const { data } = message;
	const { command, payload } = data;

	executeCommand( command, payload );
}

onmessage = function( message ) {
	console.log( message );

	postMessage( [ "HI" ] );
};

const assessments = [];

self.registerCustomAssessment = function( name, method ) {
	assessments.push( {
		name,
		method,
	} );
};

console.log( "hi" );

importScripts( [ "http://localhost:8080/wp-seo-worker-imported-772.js" ] );

console.log( self.method() );

assessments.forEach( ( assessment ) => {
	console.log( "Running assessment " + assessment.name );
	assessment.method();
} );

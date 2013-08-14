'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
	filter('startFrom', function() {
  	return function(input, start) {
      if(input) {
				start = +start; //parse to int
				return input.slice(start);
			}
			return [];
		}
	});

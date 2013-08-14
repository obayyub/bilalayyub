'use strict';

/* Controllers */

angular.module('myApp.controllers', ['firebase', 'ui.bootstrap']).
  controller('MyCtrl1', ['$scope', '$timeout', 'angularFire', function($scope, $timeout, angularFire) {
    $scope.isCollapsed = true;
    $scope.isButtonCollapsed = false;
    $scope.currentPage = 1; //current page
    $scope.maxSize = 5; //pagination max size
    $scope.entryLimit = 5; //max rows for data table
    $scope.people = [];

    /* init pagination with $scope.list */
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };

  	var url = 'https://bayyub.firebaseio.com/people';
    var promise = angularFire(url, $scope, 'people', []);
    $scope.newPerson = {};

    promise.then(function() {
    	startWatch($scope);
    });
  }])
  .controller('NewsCtrl', ['$scope', 'angularFire', function($scope, angularFire) {
    var url = 'https://bayyub.firebaseio.com/news';
    var newsPromise = angularFire(url, $scope, 'news', []);
  }])
  .controller('HomeCtrl', [function() {

  }]);


function startWatch($scope) {
	var initializing = true;
  $scope.noOfPages = Math.ceil($scope.people.length/$scope.entryLimit);
  $scope.$watch('search', function() {
  	if(initializing) {
  		 initializing = false;
  	} else {
  		$scope.noOfPages = Math.ceil($scope.filteredPeople.length/$scope.entryLimit);
  	}
  });
	$scope.addPerson = function() {
    Date.now = function() {
      return new Date().valueOf();
    }
    var myDate = new Date(Date.now());
    console.log(myDate);
		$scope.people.push($scope.newPerson);
		$scope.newPerson= '';
	};
};
'use strict';

/* Controllers */

angular.module('myApp.controllers', ['firebase', 'ui.bootstrap']).
  controller('MyCtrl1', ['$scope', '$timeout', 'angularFire', function($scope, $timeout, angularFire) {
    $scope.isCollapsed = true;
    $scope.isButtonCollapsed = false;
    $scope.currentPage = 1; //current page
    $scope.maxSize = 10; //pagination max size
    $scope.entryLimit = 10; //max rows for data table
    $scope.people = [];
    $scope.isValid = true;

    /* init pagination with $scope.list */
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };

  	var url = 'https://bayyub.firebaseio.com/people';
    var promise = angularFire(url, $scope, 'people', []);
    $scope.newPerson = {};

    promise.then(function() {
    	startWatch($scope);
      console.log($scope.people);
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
    if(!$scope.newPerson.name) {
      $scope.isValid = false;
    } else {
      $scope.isCollapsed = !$scope.isCollapsed
      $scope.showThankYou = true
      $scope.isValid = true;
      var currentDate = moment().format('YYYY-MM-DD');
      $scope.newPerson.date = currentDate;
      $scope.people.push($scope.newPerson);
      $scope.newPerson= '';
    };
	};
};
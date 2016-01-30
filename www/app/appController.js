// Created by Edward McNealy on 1/30/2016
'use strict';

var app = angular.module('accelerometer');

app.controller('AppCtrl', [ '$rootScope', '$scope', '$state', '$ionicViewService', '$ionicPopup',
	function($rootScope, $scope, $state, $ionicViewService, $ionicPopup) {
	
	$state.go('app.home');
	
}]);


	
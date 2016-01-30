// Created by Edward McNealy on 1/30/2016

'user strict'
var app = angular.module('accelerometer', [ 'ionic', 'ngCordova', 'ui.router', 'ui.bootstrap' ]);

app.run(['$rootScope', '$ionicPlatform', '$cordovaSplashscreen', '$ionicViewService', '$state', '$templateCache',
         function($rootScope, $ionicPlatform, $cordovaSplashscreen, $ionicViewService, $state, $templateCache, $http) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
	$ionicPlatform.registerBackButtonAction(function () {
		// Check if on the home page or login screen
		navigator.app.backHistory();
	});
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {
	$stateProvider
	// App States
	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'app/components/menu.html',
	})
	.state('app.home', {
		url: '/home',
		views: {
    		'menuContent': {
    			templateUrl : 'app/components/home/home.html',
    			controller: 'HomeCtrl'
    		}
    	}
	})
	// If none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app');
}]);

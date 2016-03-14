'use strict';

/**
 * @ngdoc overview
 * @name cvApp
 * @description
 * # cvApp
 *
 * Main module of the application.
 */
angular
  .module('cvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('cv', {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
            profile:  function(ProfileFactory){
                return ProfileFactory.getProfile().success(function(data) {
                    return data;
                });
            }
        }
      })
      .state('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  })
    .directive('sticky', Sticky);

Sticky.$inject = [ '$mdSticky' ];

function Sticky($mdSticky) {
    return {
        restrict : 'A',
        link : function(scope, element) {
            console.log(element);
            $mdSticky(scope, element);
        }
    }
}


;

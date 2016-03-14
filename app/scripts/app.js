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
    $stateProvider
      .state('cv', {
        url: "/",
        views:{
            sidebar: {
                templateUrl: 'views/sideBar.html',
                controller: 'SidebarCtrl',
                controllerAs: 'sidebar'
            },
            content:{
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            }
        },
        resolve: {
            profile:  function(ProfileFactory){
                return ProfileFactory.getProfile().success(function(data) {
                    return data;
                });
            }
        }
      })
      .state('cv.coverLetterFifa', {
        url: 'cover-letter-fifa',
        views:{
            'content@': {
                templateUrl: 'views/cover-letter.html',
                controller: 'CoverLetterCtrl',
                controllerAs: 'coverLetter'
                }
            }
      });
    $urlRouterProvider.otherwise("/cover-letter-fifa");
  });

'use strict';

/**
 * @ngdoc service
 * @name cvApp.profile
 * @description
 * # profile
 * Factory in the cvApp.
 */
angular.module('cvApp')
  .factory('ProfileFactory', function ($http) {


        var profile = {};

        profile.getProfile = function (){
            return $http.get('data/profile.json');
        };

        return profile;
  });

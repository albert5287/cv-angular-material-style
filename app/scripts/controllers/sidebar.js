'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('SidebarCtrl', function (profile) {
        var vm = this;
        vm.profile = profile.data;

        vm.getFullName = function(){
            return vm.profile.firstName + ' ' + vm.profile.lastName;
        };

        vm.getFullPhoneNumber = function(){
            return vm.profile.personalInformation.phone.code + vm.profile.personalInformation.phone.number;
        };

        vm.getPhoneNumberFormatted = function(){
            return '(' + vm.profile.personalInformation.phone.code + ') ' + vm.profile.personalInformation.phone.number;
        };
  });

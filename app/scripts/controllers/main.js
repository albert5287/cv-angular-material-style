'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('MainCtrl', function (profile) {
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

    vm.getIndexOfSkill = function(elem){
        return vm.profile.personalInformation.skills.indexOf(elem);
    };

    vm.toDate = function(string){
        var date = null;
        if(string != ''){
            var aux = string.split('-');
            date = new Date(parseInt(aux[1]), parseInt(aux[0])-1);
        }
        return date;
    }



  });

// this is Immediately-invoked Function Expression (IIFE)
// to make sure that no local variables bleed into the globl scope
(function(){
    'use strict';
    // to not define any variable globally if it's written without the 'var' keyword    

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.name = "Amany";
    }
})();
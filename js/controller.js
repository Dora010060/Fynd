var frontApp = angular.module('frontApp',[]);

frontApp.controller('colorCtrl', function ($scope){
    alert('Hello');
    var colors = ['red','yellow','green','blue'];
    
    angular.forEach(colors, function(value, key) {
        $scope.ColorSelect.push(value);
      });

    
})
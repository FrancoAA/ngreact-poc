import HelloWorld from './components/hello-world';
import 'angular';
import 'ngreact';


angular.module('app', ['react'])
  .directive('helloWorld', ['reactDirective', function(reactDirective) {
    return reactDirective(HelloWorld, ['name', 'message']);
  }])
  .controller('helloController', ['$scope', function($scope) {
    $scope.person = { name: 'Franco', message: 'Welcome' };
  }]);

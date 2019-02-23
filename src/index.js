import {HelloWorld, ComponentWithRouting} from './components/hello-world';
import 'angular';
import 'angular-route';
import 'ngreact';


angular.module('app', ['react', 'ngRoute'])
  .config(function($locationProvider, $routeProvider) {
    console.log('everything is fine');
  })
  .directive('helloWorld', ['reactDirective', function(reactDirective) {
    return reactDirective(HelloWorld, ['name', 'message']);
  }])
  .directive('componentWithRouting', ['reactDirective', function(reactDirective) {
    return reactDirective(ComponentWithRouting);
  }])
  .controller('helloController', ['$scope', function($scope) {
    $scope.person = { name: 'Franco', message: 'Welcome' };
  }]);

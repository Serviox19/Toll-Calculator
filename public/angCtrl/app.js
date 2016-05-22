var app = angular.module('tollCalculator', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: 'public/views/partials/home.html'
  })
});

app.controller('mainController', function($scope, $http) {
  $scope.getTollCost = function() {
    var origin = $scope.origin;
    var destination = $scope.destination;
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='  + origin + '&key=AIzaSyA-nftHnip6wJ1zX_SoBfmmhZmynfvk-u0').then(function(data) {
      var originGeoCode = data.data.results[0].geometry.location;
      console.log(originGeoCode);
    })

    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='  + destination + '&key=AIzaSyA-nftHnip6wJ1zX_SoBfmmhZmynfvk-u0').then(function(data) {
      var destGeoCode = data.data.results[0].geometry.location;
      console.log(destGeoCode);
    })
  }
});

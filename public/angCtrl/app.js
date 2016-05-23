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
      console.log(originGeoCode);//add scope

      return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='  + destination + '&key=AIzaSyA-nftHnip6wJ1zX_SoBfmmhZmynfvk-u0');

    }).then(function(data) {
      var destGeoCode = data.data.results[0].geometry.location;
      console.log(destGeoCode);// add scope

      var apiURL = 'https://route.cit.api.here.com/routing/7.2/calculateroute.json';
      apiURL += '?app_id=dQ30U2cw9m9iJSTFpXJY';
      apiURL += '&app_code=uXANN2Bk5gaLiP2MF5JL8w';
      apiURL += '&waypoint0=geo!40.756445,-73.987912';// get this from Google Maps Api
      apiURL += '&waypoint1=geo!40.354974,-74.348259';// get from Google Maps Api
      apiURL += '&mode=fastest;car;traffic:disabled';

      $http.get('apiURL').then(function(response) {
        console.log(response);
      }).catch(function(err) {
        if (err) throw err;
      });

    });
  }
});

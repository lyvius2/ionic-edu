// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('naviApp', ['ionic']);

app.config(function($stateProvider,
                    $urlRouterProvider){
  $stateProvider.state("list",{
    url:"/list",
    templateUrl:"view/list.html",
    controller:"listController"
  });

  $stateProvider.state("search",{
    url:"/search",
    templateUrl:"view/search.html"
  });

  $stateProvider.state("write",{
    url:"/write",
    templateUrl:"view/write.html"
  });

  $stateProvider.state("detail",{
    url:"/detail/:id",
    templateUrl:"view/detail.html",
    controller:"detailController"
  });

  $urlRouterProvider.otherwise("/list");
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

function Emoticons(name,profile,id,img){
  this.name = name;
  this.profile = profile;
  this.id = id;
  this.img = img;
}

app.controller("listController",["$scope", function($scope){
  $scope.emoticons = [
    new Emoticons("네오","아주 귀여움", 1, "neo.png"),
    new Emoticons("무지","노란색 단무지", 2, "muji.png")
  ];
}]);

app.controller("detailController",["$scope", "$stateParams", function($scope, $stateParams){
  $scope.id = $stateParams.id;
}]);
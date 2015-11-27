// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

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

//controller를 붙임
app.controller("listController",["$scope", function($scope){
  //alert("test");

  $scope.items = [
    {end:true,title:"밥먹기"},
    {end:false,title:"공부"},
    {end:true,title:"책보기"},
    {end:false,title:"영화감상"},
    {end:false,title:"게임"},
    {end:true,title:"저녁약속"},
    {end:false,title:"저녁밥먹기"}
  ];

  $scope.update = function(){
    alert("수정하였습니다.");
  }
  //기본은 delete 버튼 숨김
  $scope.showDelete = false;

  $scope.showDeleteBtns = function(){
    $scope.showDelete = !$scope.showDelete;
  }

  $scope.showReorder = false;

  $scope.showReorderBtns = function(){
    $scope.showReorder = !$scope.showReorder;
  }
}]);
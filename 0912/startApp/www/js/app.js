// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('app', ['ionic','ngResource']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'view/index.js',
      controller: 'loginController'
    })
    
    .state('signup', {
      url: '/signup',
      templateUrl: 'view/signup.js',
      controller: 'signupController'
    })
    
    .state('main', {
      url: '/main',
      templateUrl: 'view/main.js',
      controller: 'mainController'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/login');
  

});

// 서비스로 $resource 객체를 등록
app.service("$Todos",function($resource){
  //$resource("주소","파라미터","메서드재정의")
  //query() : 배열로 받아오기 : select(Read)
  //get() : 1개 받아오기 : select(Read)
  //delete() : delete(Delete)
  //save() : insert("@_id.$oid"Create)

  //update() : update(update) <-- 새로 만들기

  return $resource("https://api.mongolab.com/api/1/databases/cai/collections/todos/:id",
    {
      apiKey : "K_0rXtTazYziRCm3zHA7dI9e1luNb25Q",
      id : "@_id.$oid"
    },{
      "update":{"method":"PUT"},
      "delete":{"method":"DELETE"}
    });
});

app.controller("signupController", ["$scope", "$state", function($scope, $state){
  $scope.goIndex = function(){
    $state.go("login");
  }
}]);

app.controller("loginController", ["$scope", "$state", function($scope, $state){
  $scope.goMain = function(){
    $state.go("main");
  }
}]);

app.controller("mainController", ["$scope", "$Todos", "$ionicLoading", "$ionicPopup", "$ionicModal", function($scope, $Todos, $ionicLoading, $ionicPopup, $ionicModal){
  //모달 객체 생성
  $ionicModal.fromTemplateUrl("view/write.js", function(modal){
    $scope.todoModal = modal;
  },{scope:$scope,animation:"slide-in-up"});

  $scope.showWriteForm = function() {
    //modal 다이어그램을 보여줌
    $scope.todoModal.show();
  }

  $scope.writeTodo = function(title){
    var todo = new $Todos();
    todo.title = title;
    todo.end = false;

    todo.$save(function(todo){
      alert("입력됨 : " + todo);
      $scope.todoModal.hide();
      getTodos();
    });
  }

  $scope.closeWriteForm = function(){
    $scope.todoModal.hide();
  }

  $scope.updateTodo = function(todo){
    todo.$update(function(){
      alert("수정완료!");
    });
  }

  $scope.deleteTodo = function(todo){
    $ionicPopup.confirm({
      title:"삭제확인",
      content:"정말로 삭제하시겠습니까?"
    }).then(function(result){
      //그리고 나서 result값이 반환

      if(result){
        todo.$delete(function(){
          getTodos();
        }); //삭제 완료
      } //유저가 확인버튼을 누를 때만
    }); //popup confirm then end
  } //delete Todo end

  //서버에서 실제 할일 목록을 받아오는 함수
  function getTodos(){

    //ajax이기 때문에 얼마만큼의 시간이 필요할지 모릅니다.
    //그래서 loading을 띄웁니다.
    $ionicLoading.show({
      template:"<i class=\"icon ion-looping\"></i> 로딩 중..."
    });
    //$ionicLoading.show({});
    $scope.todos = $Todos.query(function(todos){
      $ionicLoading.hide();
    });
  }
  getTodos();
}]);
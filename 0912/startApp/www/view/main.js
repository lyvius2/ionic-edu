<ion-view title="내 할 일 목록">
	<!--
	<ion-nav-bar class="bar bar-calm">
		<button>삭제</button>
		<h1 class="title">내 할 일 목록</h1>
	</ion-nav-bar>
	-->
    <ion-content class="has-header">
        <h2 class="title">할 일</h2>
        <ion-list show-delete="false">
            <ion-item ng-repeat="todo in todos">
            	<ion-delete-button class="button icon ion-minus-circled">
            	</ion-delete-button>
            	
            	<label class="toggle">
            	<input type="checkbox" ng-model="todo.end" ng-click="updateTodo(todo)" />
            	<div class="track">
            		<div class="handle"></div>
            	</div>
            	<span ng-bind="todo.title"></span>
            	</label>

            	<ion-option-button class="button-assertive" ng-click="deleteTodo(todo)">
            		삭제
            	</ion-option-button>
            </ion-item>
        </ion-list>
    </ion-content>
    <ion-footer-bar class="bar bar-calm">
    	<h2 class="title">&copy;2015 cai.com</h2>
    	<button class="button icon ion-edit" ng-click="showWriteForm()">
    	할 일 쓰기
    	</button>
    </ion-footer-bar>
</ion-view>
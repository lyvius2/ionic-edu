<h1>할 일 목록</h1>
<ul>
	<li data-ng-repeat="todo in todos">
		<label>
			<input type="checkbox" data-ng-model="todo.end" data-ng-click="updateTodo(todo)"/>
			{{todo.title}}
		</label>
		<button data-ng-click="deleteTodo(todo)">삭제</button>
	</li>
</ul>
<img src="img/ajax-loader.gif" data-ng-hide="hide"/>
<h1>할 일 쓰기</h1>
<form data-ng-submit="writeTodo(title,$event)">
	<fieldset>
		<legend>할 일 입력폼</legend>
		<input type="text" data-ng-model="title" />
		<button>할 일 입력</button>
	</fieldset>
</form>
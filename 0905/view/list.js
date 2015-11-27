<h1>{{title}}목록</h1>
<ul>
	<li data-ng-repeat="movie in movies">
		<a href="#movie/{{movie.id}}">{{movie.name}}</a>
	</li>
</ul>
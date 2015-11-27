	<h1>D-day목록</h1>
	<p id='nameBox'>
		<label>이름 
		<input type="text" ng-model="title">
		</label>
	</p>
	<datepicker date-format="yyyy-MM-dd">
		<input type="text" ng-model="date" />
	</datepicker>
	<button ng-click="insertDDay(ddays,title,date)">d-day입력</button>
	<hr/>
	<ul>
	<!-- 자료의 정렬 : orderBy -->
	<li ng-repeat="dday in ddays|orderBy:'date'">
		내용: {{dday.title}}
		/ 날짜 : {{dday.date|date:"yyyy년 M월 d일"}}
		/ d-day : {{calcDday(dday.date)}}
	</li>
	</ul>
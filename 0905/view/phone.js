<h1>{{title}} 목록</h1>
<ul>
	<li data-ng-repeat="phone in phoneList">
	이름 : {{phone.name}}
	/ 가격 : <span data-ng-bind="phone.price|currency:undefined:0"></span>
	/ 출시일 : {{phone.release|date:"yyyy년 M월 d일"}}</li>
</ul>
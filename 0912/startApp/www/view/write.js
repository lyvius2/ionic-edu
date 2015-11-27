<div style="" class="modal">
    <ion-header-bar style="" class="bar-stable">
        <h1 class="title" style="">할 일 쓰기</h1>
        <div style="" class="buttons">
            <button class="button button-calm button-clear  icon ion-close-round" ng-click="closeWriteForm()"></button>
        </div>
    </ion-header-bar>
    <ion-content style="" class="has-header" scroll="false" padding="true">
        <ion-list style="">
            <label style="" class="item item-input">
                <span class="input-label">할 일</span>
                <input placeholder="할 일을 입력해주세요." type="text" ng-model="title">
            </label>
        </ion-list>
        <button class="button button-calm button-block  icon-left ion-edit" ng-click="writeTodo(title)">등록</button>
    </ion-content>
</div>
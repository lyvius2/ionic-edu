<ion-view style="" title="회원가입">
    <ion-content class="has-header" scroll="false" padding="true">
        <form style="">
            <ion-list style="">
                <label style="" class="item item-input">
                    <span class="input-label">이름</span>
                    <input placeholder="이름을 입력하세요" type="text">
                </label>
                <label style="" class="item item-input">
                    <span class="input-label">아이디</span>
                    <input placeholder="아이디를 입력하세요" type="text">
                </label>
                <label style="" class="item item-input">
                    <span class="input-label">비밀번호</span>
                    <input placeholder="비밀번호를 입력하세요" type="text">
                </label>
            </ion-list>
            <button style="" ng-click="goIndex()" class="button button-calm button-block  icon-left ion-log-in">회원가입</button>
        </form>
    </ion-content>
</ion-view>
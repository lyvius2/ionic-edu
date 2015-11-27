<ion-view style="" title="내 할 일">
    <ion-content class="has-header" padding="true">
        <img style="width: 100%; height: auto;" src="img/muji.png">
        <form style="">
            <ion-list style="">
                <label style="" name="id" class="item item-input">
                    <span class="input-label">아이디</span>
                    <input placeholder="아이디를 입력하세요" type="text">
                </label>
                <label style="" name="password" class="item item-input">
                    <span class="input-label">비밀번호</span>
                    <input placeholder="비밀번호를 입력하세요" type="password">
                </label>
            </ion-list>
            <button style="" ng-click="goMain()" class="button button-positive button-block  icon-left ion-social-github">Log in</button>
            <a style="" class="button button-positive button-clear button-block " href="#/signup">회원가입</a>
        </form>
    </ion-content>
</ion-view>
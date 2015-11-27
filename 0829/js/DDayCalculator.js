		function DDayCalCulator() {
			//DDayCalCulator 객체가 가지고 있는 메서드 선언
			this.execute = function(date){
				//현재와 비교할 날짜 객체 : date
				var now = new Date();
				var linux = Math.ceil((date - now)/1000/60/60/24);
				//1000 나눈 것 : 초
				//60 : 분
				//60 : 시간
				//24 : 일

				//Math.ceil() : 올림 함수
				//Math.abs() : 절대값

				if(date - now > 0){
					//미래
					linux = "-" + linux;
				} else {
					//과거
					linux = "+" + Math.abs(linux);
				}//if~else end
				return "D" + linux;
			}	// execute() end
		}	//DDayCalCulator function() end
angular.module("customDirectives", [])
    .factory("logService", function() {
       var messageCount = 0;
        return {
            log: function (msg) {
                console.log("(LOG + " + messageCount++ + ") " + msg);
            }
        }
    });

// 모듈 재사용성을 위한 모듈선언
// Listing18-2와 같은 방법은 한 모듈안에 서비스가 묶여있다
// logService
// 등록한 모듈을 다른 모듈에서 불러오는 방법
/*
* module['directive 모듈 이름]
* function(실제 생성한 모듈 이름)
*
*
* */
angular.module("customDirectives", [])
    .directive("triButton", function () {
        return {
            scope: {counter: "=counter"},
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    console.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });

// 모듈 재사용성을 위한 모듈선언
// Listing18-2와 같은 방법은 한 모듈안에 서비스가 묶여있다
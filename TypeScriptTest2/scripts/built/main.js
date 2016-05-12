define(["require", "exports", "./helloworld", "./calc"], function (require, exports, helloworld_1, calc_1) {
    "use strict";
    var calc = new calc_1.Calc(8, 4);
    console.log(calc.add());
    console.log(calc.subtract());
    var hello = new helloworld_1.Hello("Dev", "Team");
    console.log(hello.sayHello());
});
//# sourceMappingURL=main.js.map
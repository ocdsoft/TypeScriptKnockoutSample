define(["require", "exports"], function (require, exports) {
    "use strict";
    var Calc = (function () {
        function Calc(number1, number2) {
            this.number1 = number1;
            this.number2 = number2;
        }
        Calc.prototype.add = function () {
            return this.number1 + this.number2;
        };
        Calc.prototype.subtract = function () {
            return this.number1 - this.number2;
        };
        return Calc;
    }());
    exports.Calc = Calc;
});
//# sourceMappingURL=calc.js.map
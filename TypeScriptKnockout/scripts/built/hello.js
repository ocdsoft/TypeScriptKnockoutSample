define(["require", "exports", "knockout", "./knockout-bindinghandlers", "calc"], function (require, exports, ko, bindings, calc_1) {
    "use strict";
    var HelloViewModel = (function () {
        function HelloViewModel(language, framework) {
            var _this = this;
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
            this.firstname = ko.observable("");
            this.lastname = ko.observable("");
            this.result = ko.observable("");
            this.firstNumber = ko.observable(0);
            this.secondNumber = ko.observable(0);
            this.secondNumberConverted = ko.observable(0);
            this.fullname = ko.computed({
                owner: this,
                read: function () {
                    return (_this.firstname() == "") ? "" : "Hello, " + _this.firstname() + " " + _this.lastname() + "!";
                }
            });
            this.firstNumberConverted = ko.computed({
                owner: this,
                read: function () {
                    return parseFloat(_this.firstNumber().toString());
                }
            });
            this.secondNumber.subscribe(function (newSecondNumber) {
                _this.secondNumberConverted(parseFloat(newSecondNumber.toString()));
            });
        }
        HelloViewModel.prototype.add = function () {
            var calc = new calc_1.Calc(this.firstNumberConverted(), this.secondNumberConverted());
            this.result(this.firstNumber() + " + " + this.secondNumber() + " = " + calc.add());
        };
        HelloViewModel.prototype.subtract = function () {
            var calc = new calc_1.Calc(this.firstNumberConverted(), this.secondNumberConverted());
            this.result(this.firstNumber() + " - " + this.secondNumber() + " = " + calc.subtract());
        };
        return HelloViewModel;
    }());
    bindings.register();
    ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));
});
//# sourceMappingURL=hello.js.map
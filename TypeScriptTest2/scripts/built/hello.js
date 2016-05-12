define(["require", "exports", "knockout", "calc"], function (require, exports, ko, calc_1) {
    "use strict";
    var HelloViewModel = (function () {
        function HelloViewModel(language, framework) {
            var _this = this;
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
            this.firstname = ko.observable("");
            this.lastname = ko.observable("");
            this.result = ko.observable("");
            this.firstnumber = ko.observable(0);
            this.secondnumber = ko.observable(0);
            this.fullname = ko.computed({
                owner: this,
                read: function () {
                    return (_this.firstname() == "") ? "" : "Hello, " + _this.firstname() + " " + _this.lastname() + "!";
                }
            });
        }
        HelloViewModel.prototype.add = function () {
            String.prototype;
            var calc = new calc_1.Calc(parseFloat(this.firstnumber().toString()), parseFloat(this.secondnumber().toString()));
            this.result(this.firstnumber() + " + " + this.secondnumber() + " = " + calc.add());
        };
        HelloViewModel.prototype.subtract = function () {
            var calc = new calc_1.Calc(this.firstnumber(), this.secondnumber());
            this.result(this.firstnumber() + " - " + this.secondnumber() + " = " + calc.subtract());
        };
        return HelloViewModel;
    }());
    ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));
});
//# sourceMappingURL=hello.js.map
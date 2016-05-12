define(["require", "exports"], function (require, exports) {
    "use strict";
    var Hello = (function () {
        function Hello(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Hello.prototype.sayHello = function () {
            return "Hello " + this.firstName + " " + this.lastName;
        };
        return Hello;
    }());
    exports.Hello = Hello;
});
//# sourceMappingURL=helloworld.js.map
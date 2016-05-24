define(["require", "exports", "knockout"], function (require, exports, ko) {
    "use strict";
    function register() {
        ko.bindingHandlers.confirmClick = {
            init: function (element, valueAccessor, allBindings, viewModel) {
                var value = valueAccessor();
                var message = ko.unwrap(value.message);
                var click = value.click;
                ko.applyBindingsToNode(element, {
                    click: function () {
                        if (confirm(message))
                            return click.apply(this, Array.prototype.slice.apply(arguments));
                    }
                }, viewModel);
            }
        };
    }
    exports.register = register;
});
//# sourceMappingURL=knockout-bindinghandlers.js.map

import * as ko from "knockout";

export function register(): void {    
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
        }
    }



//Link to documentation
//http://www.typescriptlang.org/docs/handbook/knockout.html
import * as ko from "knockout";
import * as bindings from "./knockout-bindinghandlers";
import { Calc } from "calc";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>
    firstname: KnockoutObservable<string>
    lastname: KnockoutObservable<string>
    fullname: KnockoutObservable<string>
    firstNumber: KnockoutObservable<number>
    secondNumber: KnockoutObservable<number>
    firstNumberConverted: KnockoutObservable<number>
    secondNumberConverted: KnockoutObservable<number>
    result: KnockoutObservable<string>

    constructor(language: string, framework: string) {
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
            read: () => {
                return (this.firstname() == "") ? "" : "Hello, " + this.firstname() + " " + this.lastname() + "!";
            }
        });

        this.firstNumberConverted = ko.computed({
            owner: this,
            read: () => {
                return parseFloat(this.firstNumber().toString());
            }
        });

        this.secondNumber.subscribe((newSecondNumber) => {
            this.secondNumberConverted(parseFloat(newSecondNumber.toString()));            
        });

    }

    add(): void {        
        let calc = new Calc(this.firstNumberConverted(), this.secondNumberConverted());
        this.result(this.firstNumber() + " + " + this.secondNumber() + " = " + calc.add());
    }

    subtract(): void {
        let calc = new Calc(this.firstNumberConverted(), this.secondNumberConverted());
        this.result(this.firstNumber() + " - " + this.secondNumber() + " = " + calc.subtract());
    }
}
bindings.register();
ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));
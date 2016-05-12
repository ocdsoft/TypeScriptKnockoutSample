//Link to documentation
//http://www.typescriptlang.org/docs/handbook/knockout.html
import * as ko from "knockout";
import { Calc } from "calc";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>
    firstname: KnockoutObservable<string>
    lastname: KnockoutObservable<string>
    fullname: KnockoutObservable<string>
    firstnumber: KnockoutObservable<number>
    secondnumber: KnockoutObservable<number>
    result: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
        this.firstname = ko.observable("");
        this.lastname = ko.observable("");
        this.result = ko.observable(""); 
        this.firstnumber = ko.observable(0);
        this.secondnumber = ko.observable(0);
        this.fullname = ko.computed({
            owner: this,
            read: () => {
                return (this.firstname() == "") ? "" : "Hello, " + this.firstname() + " " + this.lastname() + "!";
            }
        });
    }

    add(): void {
        String.prototype
        let calc = new Calc(parseFloat(this.firstnumber().toString()), parseFloat(this.secondnumber().toString()));
        this.result(this.firstnumber() + " + " + this.secondnumber() + " = " + calc.add());
    }

    subtract(): void {
        let calc = new Calc(this.firstnumber(), this.secondnumber());
        this.result(this.firstnumber() + " - " + this.secondnumber() + " = " + calc.subtract());
    }
}

ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));

import { Hello } from "./helloworld";
import { Calc } from "./calc";

let calc = new Calc(8, 4);

console.log(calc.add());

console.log(calc.subtract());

let hello = new Hello("Dev", "Team");

console.log(hello.sayHello());





    export class Hello {
        firstName: string;
        lastName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        sayHello(): string {
            return "Hello " + this.firstName + " " + this.lastName;
        }
    }



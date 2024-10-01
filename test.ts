class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I an ${this.age} years old.`);
    }
}

class Employee extends Person {
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    work () : void {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

const person = new Employee('John', 30, 'Software Engineer');
person.sayHello();
person.work();
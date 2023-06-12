export class Person {
    // public name: string,
    // private address: string

    constructor(
        public name: string, 
        private address: string = 'No address') 
        {}
}

export class Hero {

    constructor(
        public alterEgo: String,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        this.person = new Person(realName);
    }
}

const John = new Person('John','NY');

const Iromnan = new Hero('Iroman', 45, 'tony', John);

console.log(Iromnan);

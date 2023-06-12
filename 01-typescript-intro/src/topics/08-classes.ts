export class Person {
    // public name: string,
    // private address: string

    constructor(
        public name: string, 
        private address: string = 'No address') 
        {}
}

export class Hero extends Person {
    constructor(
        public alterEgo: String,
        public age: number,
        public realName: string,
    ) {
        super(realName, 'NY');
    }
}

const Iromnan = new Hero('Iroman', 45, 'tony');

console.log(Iromnan);

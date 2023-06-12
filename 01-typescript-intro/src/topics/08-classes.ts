export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'John';
        this.address = 'Barrio picante';
    }

}

const Iromnan = new Person();

console.log(Iromnan)
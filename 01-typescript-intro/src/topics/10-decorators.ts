
function classDecorator(
    constructor: any
){
    return class constructor{
        newProperty= 'new property';
        hello = 'override';
    }
};

// clase
@classDecorator 
export class SuperClass {
    public myProperty: string = 'ABC';

    // metodo
    print(){
        console.log('Hola');
    }
}

console.log( SuperClass);


// Instancia de la clase
const myClass = new SuperClass();
console.log( myClass);

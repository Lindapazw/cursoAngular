
function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
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

// imprimo la deficinion de mi clase
console.log( SuperClass);


// Instancia de la clase
const myClass = new SuperClass();
console.log( myClass);

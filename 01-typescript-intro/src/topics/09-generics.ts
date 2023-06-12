// El primer generico es una T

export function whatMyType<T>(argument: T): T{
    return argument;
}

let amIString = whatMyType<string>('string');
let amINumber = whatMyType<number>(123);
let amIArray = whatMyType<number[]>([1,2,3,3]);


console.log(amIString.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
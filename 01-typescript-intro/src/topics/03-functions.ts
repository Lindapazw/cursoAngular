function addNumbers(a: number, b: number){
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string =>{
    return (a + b).toString();
}

const result: string = addNumbers(1, 2).toString();
const result2: string = addNumbersArrow(1, 2).toString();

function multiply(num1: number, num2: number, base: number){
    return num1 * base ;
}

console.log(result);
console.log(result2);
const multiplyResult = multiply(1,2,3);

console.log(multiplyResult);

export{};
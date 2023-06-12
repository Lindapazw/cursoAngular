import { Product, taxCalculator } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Heladera',
        price: 100,
    },
    {
        description: 'ophone',
        price: 100,
    }
];

// Tax = 0.15
const [ total, tax] = taxCalculator({
    products: shoppingCart,
    tax: 0.15,

});

console.log('Total', total);
console.log('Tax', tax);
// interface producto
export interface Product {
    description: string;
    price: number;
}

// objeto Phone
const phone: Product = {
    description: 'Iphone',
    price: 1000, 
}

// objeto Tablet
const tablet: Product = {
    description: 'tablet',
    price: 1100, 
}

// opciones de impuesto
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// funcion
export function taxCalculator( options: TaxCalculationOptions ): number[] {
    let total = 0;

    options.products.forEach( ({price}) =>{
        total += price;
    });

    return [total, total * options.tax];
}

const shoppingCard = [phone, tablet];

// Destructuring
const [total, taxResult] = taxCalculator({
    products: shoppingCard,
    tax: 0.15,
})

console.log('Total es igual a: ',total);
console.log('Tax ',taxResult);


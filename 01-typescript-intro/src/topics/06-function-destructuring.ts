// interface producto
interface Product {
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
function taxCalculator( options: TaxCalculationOptions ): number[] {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
}

const shoppingCard = [phone, tablet];
const tax = 0.15;

const result = taxCalculator({
    products: shoppingCard,
    tax: tax,
})

console.log('Total es igual a: ', result[0]);
console.log('Tax ', result[1]);

export{}
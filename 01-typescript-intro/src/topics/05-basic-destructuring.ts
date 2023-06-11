const dbz: string[] = ['Goku','Goku2','Goku3']

console.error('Personaje 3: ', dbz[2] || 'No hay personaje');

// array destructuring

const [ , , linda = 'not found']: string[] = ['Goku','Goku2','linda'];

console.log('Personaje 3: ', linda );

export{};
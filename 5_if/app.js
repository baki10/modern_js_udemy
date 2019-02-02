let id = '100';

// equal
if (id == 100) {
    console.log('equal');
} else {
    console.log('not equal');
}

// equal value and type
if (id === 100) {
    console.log('equal');
} else {
    console.log('not equal');
}

if (id) {
    console.log(`The ID is ${id}`);
} else {
    console.log('NO ID');
}

const color = 'red';
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not RGB');
        break;
}

const x = 2;
const y = 20;
if (x > 0 && y <= 20 || x > 10 && y > 15) {
    console.log('if');
}

// ternary operator
console.log(id === '100' ? 'TRUE' : 'FALSE');

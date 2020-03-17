const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);
const c = parseFloat(lines[2]);

console.log('NUMBER =', a);
console.log('SALARY = U$', (b * c).toFixed(2));

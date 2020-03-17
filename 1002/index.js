const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const pi = 3.14159;
const a = parseFloat(lines[0]);

console.log(`A=${(pi * a * a).toFixed(4)}`);

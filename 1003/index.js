const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);

console.log("SOMA =", a + b);

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const a = parseFloat(lines[0]) * 2;
const b = parseFloat(lines[1]) * 3;
const c = parseFloat(lines[2]) * 5;

console.log(`MEDIA = ${((a + b + c) / 10).toFixed(1)}`);

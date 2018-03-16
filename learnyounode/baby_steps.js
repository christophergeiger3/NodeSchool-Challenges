nums = process.argv.slice(2);

console.log( nums.reduce((a, b) => Number(a)+Number(b)) );

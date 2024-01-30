let evenDivisorsSum = 0;
let divisors = [];
let totalDivisorsSum = 0;

for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
      divisors.push(i);
      totalDivisorsSum += i;

      if (i % 2 === 0) {
          evenDivisorsSum += i;
      }
  }
}

console.log(`${a} divisors: ${divisors}`);
console.log(`Total divisors sum: ${totalDivisorsSum}`);
console.log(`Even divisors sum: ${evenDivisorsSum}`);
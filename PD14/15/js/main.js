let a = 222;
let b = 245;

for (let i = a; i <= b; i++) {
  if (i % 3 === 0) {
    const numbers = [...i.toString()];

    for (let number of numbers) {
      if (number !== "0" && parseInt(number) % 3 === 0) {
        console.log(i);
      }
    }
  }
}

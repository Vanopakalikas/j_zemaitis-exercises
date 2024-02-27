let begikai = [22, 20, 25, 25];
let g = 0;
for (let i = 0; i < begikai.length; i++) {
  if (begikai[i] < begikai[i - 1]) g = begikai[i];
}
let sum = 0;
begikai.forEach((num) => {
  sum += num;
});
console.log(g,  sum / begikai.length - g);

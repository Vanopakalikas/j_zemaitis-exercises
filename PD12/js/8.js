let bakas = 112;
let sanaudos = 11;
let lygine = false;
let d = 0;

while (bakas > 10) {
  d++
  if (lygine) {
    bakas -= sanaudos;
    lygine = false;
    continue;
  }
  if (!lygine) {
    bakas -= sanaudos * 2;
    lygine = true;
    continue;
  }
}
console.log(d)

let dienos = [5, 6, 4, 5, 4];
let paskaitos = 0;
let laikas = 0;
for (i = 0; i < dienos.length; i++) {
  paskaitos += dienos[i];
  laikas += dienos[i] * 45;
}
console.log(laikas, paskaitos);






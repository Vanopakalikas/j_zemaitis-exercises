let ilgis = 800;
let aukstis = 600;
let kaina = 0.5;
let pilgis = 20;
let paukstis = 10;

ilgis /= pilgis;
aukstis /= paukstis;
let kiekis = aukstis * ilgis;
kaina = kiekis * kaina;
console.log(kiekis, kaina);

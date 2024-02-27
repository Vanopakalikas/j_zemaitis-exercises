let suma = 0;
let sandauga = 0;

function pluskart(arr) {
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        sandauga *= arr[i];
    }
    return [ (`Suma: ${suma}`), (`Sandauga: ${sandauga}`) ];
}

let myarr = [2, 3, 4, 5];

let rezultatai = pluskart(myarr);

console.log(rezultatai);
let n = 1997;
let m = 2018;

let temp = [];

for (let i = n; i <= m; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        temp.push(i);
    }
}

console.log(temp);
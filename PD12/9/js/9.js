let autobusai = {
    "aa" : {
        "v" : 1,
        "m" : 50,
        "k" : 17
    },
    "ab" : {
        "v" : 2,
        "m" : 0,
        "k" : 25
    }
};


let kv = 0;
let t = 0; // m
let k = 0;

for ( i = 0; i < Object.keys(autobusai).length; i++){
    kv += Object.values(autobusai)[i].k
    t += Object.values(autobusai)[i].m + Object.values(autobusai)[i].v * 60
    if(!Object.values(autobusai)[i].k > 10) k++
}
console.log(k, kv, t / Object.values(autobusai).length)
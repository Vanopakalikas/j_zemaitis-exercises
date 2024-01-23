let x = 2;
let y = 2;
let z = 1;

let numbers = [];

if(x <= y && x <= z){
    numbers.push(x)
    if(y <= z ) {
        numbers.push(y);
        numbers.push(z);
    }
    else {
        numbers.push(z);
        numbers.push(y);
    }
        
}
if(y >= x){
    if( y <= z)
        console.log(x,y,z)
    }
if(z >= x){
    if( z <= y)
    console.log(x,z,y)
}
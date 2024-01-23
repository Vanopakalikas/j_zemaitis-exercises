let a = 10
let b = 20 
let c = 30
let sum = 0;
if(a > b && a > c){
    if( b > c){
        sum = a + b
    }
    else{
        sum = a + c
    }
}
if(b > a && b > c){
    if( c > a){
        sum = b + c
    }
}

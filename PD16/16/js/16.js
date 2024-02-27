function perfectNumber(numbr){
    let sum = 0;
    for(let i = 1; i < numbr; i++){
        if(numbr % i == 0){
            sum += i;
        }
    }
    if(sum == numbr){
        return true;
    }else{
        return false;
    }
}
console.log(perfectNumber(6));
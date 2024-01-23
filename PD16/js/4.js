function numberfactorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*numberfactorial(n-1);
    }
}
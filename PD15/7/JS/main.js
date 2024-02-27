function swapCase(str) {
  let fu = str.split("");
  for(i = 0; i < fu.length; i++){
    if(fu[i] == fu[i].toUpperCase()){
      fu[i] = fu[i].toLowerCase()
    }
    else{
      fu[i] = fu[i].toUpperCase()
    }
  }
  return fu.join("");
}

console.log(swapCase("swWx  sw "));

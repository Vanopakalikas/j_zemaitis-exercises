function nonRepetitive(string){
    var result = "";
    for(var i = 0; i < string.length; i++){
        if(string.indexOf(string[i]) == string.lastIndexOf(string[i]) && string[i] != " "){
            result += string[i];
            break;
        }
    }
    return result;
}
console.log(nonRepetitive("blablabblahahaha ne"))
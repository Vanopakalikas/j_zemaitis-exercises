function CapitalLetter(yupee) {
    let res = yupee.charAt(0).toUpperCase() + yupee.slice(1);
    return res;
}
console.log(CapitalLetter("labas"));
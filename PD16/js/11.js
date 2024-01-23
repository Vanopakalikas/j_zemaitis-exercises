function findLongestWord(wtf) {
    let longestWord = wtf.split(' ').sort(
        (a, b) => { return b.length - a.length; }
    );
    return longestWord[0];
}
console.log(findLongestWord("as tooooooooooooooooks ilgas"));




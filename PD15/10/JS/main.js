let arr = [`sw`,`sw`,`swx`,`swx`];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));

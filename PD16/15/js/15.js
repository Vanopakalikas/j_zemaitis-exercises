function secondminmax(arr) {
    arr.sort(function (a, b) { return a - b });
    console.log(arr[1], arr[arr.length - 2]);
}
secondminmax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  function ifpalindrome(str) {
    var str1 = str.split("").reverse().join("");
    if (str == str1) {
      console.log("The string is palindrome");
    } else {
      console.log("The string is not palindrome");
    }
  }
  ifpalindrome("madama");
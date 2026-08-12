var isPalindrome = function(x) {
    let str = x.toString();
    return str === str.split('').reverse().join('');
};
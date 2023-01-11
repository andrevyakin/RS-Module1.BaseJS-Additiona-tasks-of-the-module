const isPalindrome = string => string === [...string].reverse().join(',').replaceAll(',', '');

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('programmer')); // false


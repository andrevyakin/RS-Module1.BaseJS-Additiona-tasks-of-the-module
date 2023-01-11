isEqualSymbols = (str1, str2) => [...str1].filter(letter => str2.includes(letter)).length === str1.length;

console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false
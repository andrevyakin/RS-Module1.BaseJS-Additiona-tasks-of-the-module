const unique = array => array.filter((item, i, array) => array.indexOf(item) === i);

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));

// => [1, 2, 4, 3, 7]
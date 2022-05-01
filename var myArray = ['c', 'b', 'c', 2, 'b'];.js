var myArray = ['c', 'b', 'c', 2, 'b'];
var uniqueArray = [...new Set(myArray)]
console.log("Original Array = ", myArray);
console.log("Array with unique values = ", uniqueArray);
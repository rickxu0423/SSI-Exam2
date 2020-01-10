/*
1. The map() method creates a new array with the results of calling a function for every array element.
2. The map() method calls the provided function once for each element in an array, in order.
3. map() does not execute the function for array elements without values.
4. this method does not change the original array.
*/

const arr = ['1', '2', '3', '4', '5'];

Array.prototype.map = function(fn){
    if (!fn) return [...this];

    let newArr = [];
    for (ele of this) newArr.push( fn(ele) );
    return newArr
};

console.log(arr.map(parseInt)); //[1, 2, 3, 4, 5]

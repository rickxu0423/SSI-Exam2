/*
1. The filter() method creates an array filled with all array elements that pass a test (provided as a function).
2. filter() does not execute the function for array elements without values.
3. filter() does not change the original array.
*/

// keep the element only if the call back function return true

const arr = [
             {val:1, name:"Bob"},
             {val:2, name:"Jack"},
             {val:3, name:"David"},
             {val:4, name:"John"},
             {val:5, name:"Alice"}
            ];

Array.prototype.filter = function(fn) {
    if (!fn) return [...this];

    let newArr = [];
    for (ele of this) if (fn(ele)) newArr.push(ele);
    return newArr
};

console.log(arr.filter( val => {return val.val > 2} )) //[{ val: 3, name: 'David' }, { val: 4, name: 'John' }, { val: 5, name: 'Alice' }]
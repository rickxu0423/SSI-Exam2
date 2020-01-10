/*
1. The reduce() method reduces the array to a single value.
2. The reduce() method executes a provided function for each value of the array (from left-to-right).
3. The return value of the function is stored in an accumulator (result/total).
4. reduce() does not execute the function for array elements without values.
5. this method does not change the original array.
*/

const numbers = [15.5, 2.3, 1.1, 4.7]

Array.prototype.reduce = function(fn){
    let total = 0;

    for (ele of this) {
        if (!fn) {
            total += ele;
            continue;
        }
        total += fn(ele);
    }
    return total
};

console.log(numbers.reduce( val => {return val*2} ))
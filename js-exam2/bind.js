Function.prototype.bind = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1), 
    toBind = this;
    return function() {
        return toBind.apply(fn, args.concat(Array.prototype.slice.call(arguments)));
    }
};

function combineStrings(str1, str2) {
    return str1 + " " + str2
}
  
var makeCool = combineStrings.bind(null, "Cool");

console.log(makeCool("trick")); // "Cool trick"
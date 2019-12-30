const arr = [
    1,
    2,
    [3,4, [5,6,0]],
    4,
    [3,7],
    0
];
const ans = [];

console.log( bfs(arr) ); 

function bfs(arr) {

    while (arr.length) {
        let cur = arr.shift();
        
        if (cur instanceof Array) {
            arr = arr.concat(cur);
        } else {
            ans.push(cur);
        }
    };
    
    return ans;
}
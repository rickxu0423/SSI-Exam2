const arr = [
    1,
    2,
    [3,4, [5,6,0]],
    4,
    [3,7],
    0
];
const ans = [];

dfs(arr);

console.log(ans)

function dfs(arr) {
    for (let element of arr) {
        if (element instanceof Array) {
            dfs(element);
        } else {
            ans.push(element);
        }
    };
}
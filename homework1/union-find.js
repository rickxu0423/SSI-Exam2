/*
utilize union-find to solve isolated island question
*/
var numIslands = function(grid) {
    if (!grid || !grid[0]) return 0;
    
    let [h, w] = [grid.length, grid[0].length]
    let sign = 2;
    const groups = {};
    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] == '1') {
                [token1, token2] = [check(i-1, j), check(i, j-1)]
                if (token1 && token2) merge(token1, token2);
                if (token1 || token2) grid[i][j] = token1 || token2;
                else {
                    grid[i][j] = sign;
                    groups[sign] = sign;
                    sign += 1;
                }                
            }
        }
    }
    
    //console.log(groups)
    let ans = 0;
    for (let key in groups) if (key == groups[key]) ans += 1;
    return ans;

    function check(i, j) {
        if (i < 0 || j < 0) return 0;
        if (grid[i][j] in groups) return grid[i][j];
        else return 0;
    }
    
    function merge(x, y) {
        if (x == y) return;
        while (groups[x] != x) x = groups[x];
        while (groups[y] != y) y = groups[y];
        if (x != y) groups[y] = x;
    }
};


const grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

console.log(numIslands(grid)) //1
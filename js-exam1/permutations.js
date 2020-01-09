var permute = function(nums) {
    const ans = [];
    const list = [];
    
    dfs(nums, list);
    
    function dfs(nums, list) {
        if (!nums.length) {
            ans.push(list);
        }
        
        for (var i = 0; i < nums.length; i++) {
            let newNums = [...nums];
            let remove = newNums.splice(i, 1);
            let newList = [...list.concat(remove)];

            dfs(newNums, newList);        
        }
    }
    
    return ans;
};

const nums = [1,2,3];

console.log(permute(nums)); //[ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
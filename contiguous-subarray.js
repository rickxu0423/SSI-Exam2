var findMaxLength = function(nums) {
    var [counter, ans] = [0, 0];
    
    const dict = {};    
    dict[0] = -1;   
    
    for (var i = 0; i < nums.length; i++) {
        counter += (nums[i] == 1 ? 1 : -1);
        
        if (dict[counter] != undefined) {
            ans = Math.max(ans, i - dict[counter]);
        } else {
            dict[counter] = i;
        }
    }
    
    return ans;
};

const nums = [0,1,0,0,0,1,1,0,1];

console.log(findMaxLength(nums)); //8
var find132pattern = function(nums) {
    var min_i = Number.MAX_VALUE;
    for (var i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        min_i = Math.min(min_i, nums[i]);
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] >= nums[i]) continue;
            if (nums[j] < nums[i] && min_i < nums[j]) return true
        }
    }
    return false;
};

const nums = [6,12,3,4,6,11,20];

console.log(find132pattern(nums)); //ture
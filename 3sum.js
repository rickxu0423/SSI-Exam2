var threeSum = function(nums) {
    ans = [];
    
    nums.sort( (a, b) => a - b );
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return ans
        
        if(i > 0 && nums[i] == nums[i - 1]) continue
        
        let left = i + 1;
        let right = nums.length - 1;
        let target = 0 - nums[i]
        
        while (left < right) {
            if (nums[left] + nums[right] == target) {
                ans.push( [ nums[i], nums[left], nums[right] ] );
                left++;
                right--;
                while (left < right && nums[left] == nums[left- 1]) left ++;
                while (left < right && nums[right] == nums[right + 1]) right --;
            } else if (nums[left] + nums[right] < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return ans;
};

const nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums)) //[[-1,-1,2],[-1,0,1]]
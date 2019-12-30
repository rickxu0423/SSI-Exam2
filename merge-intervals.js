var merge = function(intervals) {
    if (intervals.length < 2) return intervals
    
    intervals.sort( (a, b) => a[0] - b[0] );
    
    const ans = [];
    let head = intervals.shift();
    let i = 0;
    
    while (intervals.length) {
        let cur = intervals.shift();
        
        if (cur[0] <= head[1]) {
            head[1] = Math.max(head[1], cur[1]);
        } else {
            ans.push(head);        
            head = cur;
        }
    }
    
    ans.push(head);
    return ans;
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals)); //[[1,6],[8,10],[15,18]]
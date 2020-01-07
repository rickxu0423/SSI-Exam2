/*
resolve formular
input string
output value
*/
const set = new Set(['1','2','3','4','5','6','7','8','9','0','+','-','*','/']);

var solution = function(formula) {
    let stack = [];

    for (str of formula) {
        if (set.has(str) || str == '(') stack.push(str);
        else {          
            let [tem, val] = [')', ''];

            while (val != "(") {
                val = stack.pop();
                tem = val + tem;                              
            }
            stack.push(calculate(tem));          
        }
    }
    return calculate(stack.join(''));
}

var calculate = function(str) {
    let sign = new Set(['+', '-', '*', '/']);
    let [arr, res] = [[], ''];

    for (s of str) {
        if (s == '(' || s == ')') continue;
        if (sign.has(s) && res) {
            arr.push(res);
            arr.push(s);
            res = '';
        } else res += s;
    }
    if (res) arr.push(res);
    
    let [stack1, flag] = [[], '']

    for (ele of arr) {        
        if (flag) {
            tem = stack1.pop();
            if (flag == '*') stack1.push(tem * ele);
            else stack1.push(tem / ele);
            flag = '';
            continue;
        }
        if (ele == '*' || ele == '/') flag = ele;
        else stack1.push(ele);
    }

    let [ans, pos] = [0, true];

    for (num of stack1) {
        if (num == '-') { pos = false; continue; } 
        else if (num == '+') { pos = true; continue; }
        ans += pos ? parseFloat(num) : -parseFloat(num);
    }   
    return ans;
}

console.log(solution("1+2*(4-3)+(2*6)-(7*2-3)")); //4
console.log(solution("1+-14")); // -13
console.log(solution("-2*-2+1")); // 5
console.log(solution("20-15+5*4/2")); //15
console.log(solution("1+10/((15-14)*12)")); //1.833
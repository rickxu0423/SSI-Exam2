let i = 0;

function printTasks () { 
    setTimeout(function () { 
        console.log(list[i].value, new Date());
        i++; 
        if (i < list.length) printTasks(); 
   }, list[i].time)
}

let list = [{value:'a', time:2000}, {value:'b', time:1000}, {value:'c', time:3000}];

console.log("start at:", new Date())
printTasks(list);
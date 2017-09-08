console.log("main.js start");

// 主线程先启动一个worker子线程
var worker = new Worker("sw.js");
 

// 同时监听onmessage，取到子线程给它传递的计算结果
worker.onmessage = function(event){
    console.log("recieve result: " + event.data);
};
 
// init number 
var num = 10;

// 把数据发给worker
worker.postMessage(num);
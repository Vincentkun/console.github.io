console.log("main.js start");
var worker = new Worker("worker.js");
 
worker.onmessage = function(event){
    console.log("recieve result: " + event.data);
};
 
var num = 1000;
worker.postMessage(num);
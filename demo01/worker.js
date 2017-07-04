// 斐波那契数列：
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// 斐波那契函数
function fibonacci(num) {
	if (num <= 0) return 0;
	if (num === 1 || num === 2) return 1;
	var fn = 1,
		fn1 = 1,
		fn2 = fn + fn1;
	for (var i = 4; i <= num; i++) {
		fn = fn1;
		fn1 = fn2;
		fn2 = fn + fn1;
	}
	return fn2;
};

//我们先打印出 wokderjs 开始
console.log('worker.js start');

// 把这个fibonacci函数写到worker.js里面
//webworker有一个全局的函数叫onmessage
//在这个回调里面监听接收主线程的数据
onmessage = function(event) {
	//主线程的数据通过event.data传进来
	var num = event.data;
	var result = fibonacci(num);
	//计算完结果，给主线程发送一个消息
	postMessage(result);
};

// 计算完结果后，再把结果postMessage给主线程

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

console.log('worker.js start');
onmessage = function(event) {
	//主线程的数据通过event.data传进来
	var num = event.data;
	var result = fibonacci(num);
	//计算完结果，给主线程发送一个消息
	postMessage(result);
};

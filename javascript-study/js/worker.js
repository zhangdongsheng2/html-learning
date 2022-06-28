function fibonacci(n){
    return n<=2 ? 1:fibonacci(n-1) + fibonacci(n-2)
}

console.log("分线程: ",this)

this.onmessage = function (event) {
    console.log("分线程接收主线程数据: ",event.data)

    //计算
    var number = fibonacci(event.data);
    postMessage(number)
    console.log("分线程返回数据: ",number)
};


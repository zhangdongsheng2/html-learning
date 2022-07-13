
//两个入口都引入了这个js 就会分割出去单独打包
// import sum from './js/sum'

console.log('hello app')

document.getElementById("btn").onclick = function () {
    // eslint会对动态导入语法报错，需要修改eslint配置文件
    // webpackChunkName: "sum"：这是webpack动态导入模块命名的方式
    // "math"将来就会作为[name]的值显示。
    import(/* webpackChunkName: "sum" */ "./js/sum.js").then(({ sum }) => {
        console.log(sum(2, 1));
    });
};


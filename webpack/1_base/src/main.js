import count from './js/count'
import sum from './js/sum'
//引入 CSs资源, webpack才会打包
import "./css/index.css"
import './less/index.less';
import "./sass/index.sass";
import "./sass/index.scss";

import "./css/iconfont.css";

console.log(count(2,4))
console.log(sum(1,2,4,5,6,7))

// var a = 2;

const a = (c)=> {
    console.log(c)
}
console.log(a)

document.getElementById("btn").onclick = function () {
    // eslint会对动态导入语法报错，需要修改eslint配置文件
    // webpackChunkName: "sum"：这是webpack动态导入模块命名的方式
    // "sum"将来就会作为[name]的值显示。
    import(/* webpackChunkName: "sum" */ "./js/sum.js").then(({ sum }) => {
        console.log(sum(2, 1));
    });
};


// 判断是否支持HMR功能;   这样写会很麻烦，所以实际开发我们会使用其他 loader 来解决。
if (module.hot) {
    module.hot.accept("./js/count.js", function (count) {
        const result1 = count(2, 1);
        console.log(result1);
    });

    module.hot.accept("./js/sum.js", function (sum) {
        const result2 = sum(1, 2, 3, 4);
        console.log(result2);
    });
}


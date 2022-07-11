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

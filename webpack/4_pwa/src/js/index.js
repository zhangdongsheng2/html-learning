import { mul } from './test';
import '../css/index.css';

function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(mul(2, 3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));

document.getElementsByTagName('h1').item(0).innerHTML='第一个测试pwa'
/*
   1. sw代码必须运行在服务器上
      --> nodejs
      -->
        npm i serve -g
        serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
    2. 访问到页面后, 关闭服务页面依然可以访问,离线访问.
    3. 当重新打包更新了js资源后会重新加载新资源, 相同名字的资源不会重新加载
*/
// 注册serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((reg) => {
                console.log('sw注册成功了~');
                console.log(reg.update().then((rea) => {
                    console.log(rea);
                }));
            })
            .catch(() => {
                console.log('sw注册失败了~');
            });
    });
}

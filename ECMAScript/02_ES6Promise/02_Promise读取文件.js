console.log('============================简单读取文件===================================');

//1. 引入 fs模块
const fs = require('fs')
//2. 直接读取文件
fs.readFile('./resources/为学.md', (err, data) => {
    //如果失败直接抛出异常
    if (err) throw err;
    console.log(data.toString())
})

//3. 使用 Promise 封装
let p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        //如果失败直接抛出异常
        if (err) throw err;

        resolve(data)
    })
})

p.then(function (value) {
    console.log(value.toString())
}, function (reason) {
    console.log("读取失败")
})
//====================读取多个文件============================
//回调地狱示例:
// fs.readFile('./resources/为学.md', (err, data1)=>{
//     fs.readFile('./resources/插秧诗.md', (err, data2)=>{
//         fs.readFile('./resources/观书有感.md', (err, data3)=>{
//             let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
//             console.log(result);
//         });
//     });
// });


//避免回调地狱: 使用 Promise 封装
p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        console.log('============================读取多个文件===================================');
        //如果失败直接抛出异常
        if (err) throw err;
        resolve(data)
    })
})

p.then(value => {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            //如果失败直接抛出异常
            if (err) throw err;
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise(function (resolve, reject) {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            value.push(data)
            resolve(value)
            // reject("dddddd")
        })
    })
}).then(value => {
    console.log(value.join('\r\n'))
}, reason => {
    console.log("ddd")
}).catch(reason => {
    console.log("中间有报错")
})












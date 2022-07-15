/**
 * 语法
 *
 *1. 定义暴露模块:
 *    module.exports = value;
 *    exports.xxx = value;
 *2. 引入模块:
 *    var module = require(模块名或模块路径);
 *
 */
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

let uniq = require('uniq')
let fs = require('fs')

module1.foo();
module2()
module3.foo()
module3.bar()

console.log(uniq([11,1,3,4,3,2,2,2,1,2]))







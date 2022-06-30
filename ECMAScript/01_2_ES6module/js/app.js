//入口文件
console.log("===================入口文件=======================")
//模块引入
import * as m1 from "./m1.js"
import * as m2 from "./m2.js"
import * as m3 from "./m3.js"

console.log(m1)
console.log("m1.school: ",m1.school)
m1.teach()

console.log(m2.school)
console.log(m3.default.school)

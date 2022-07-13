// loaders/test-loader.js
/*
  loader就是一个函数
  当webpack解析资源时，会调用相应的loader去处理
  loader接受到文件内容作为参数，返回内容出去
    content 文件内容
    map SourceMap
    meta 别的loader传递的数据
*/
const schema = require("./schema.json");

module.exports = function loader1(content,map,meta) {
    console.log("hello loader",map,meta);

    //清楚 log
    content = content.replace(/console.*/g,'')

    // schema对options的验证规则
    // schema符合JSON Schema的规则
    const options = this.getOptions(schema);
    const prefix = `
    /*
    * Author: ${options.author}
    */
  `;
    console.log(prefix)

    /* 同步loader : 传递下个loader
      第一个参数：err 代表是否有错误
      第二个参数：content 处理后的内容
      第三个参数：source-map 继续传递source-map
      第四个参数：meta 给下一个loader传递参数
    */
    this.callback(null, content, map, meta);

    return prefix+content;
};

/*
webpack 会先从左到右执行 loader 链中的每个 loader 上的 pitch 方法（如果有），然后再从右到左执行 loader 链中的每个 loader 上的普通 loader 方法。
在这个过程中如果任何 pitch 有返回值，则 loader 链被阻断。webpack 会跳过后面所有的的 pitch 和 loader，直接进入上一个 loader 。
 */
module.exports.pitch = function (remainingRequest, precedingRequest, data) {
    console.log("do somethings");
};




const loaderUtils = require("loader-utils")
module.exports = function loaderFile(content,map,meta) {
    console.log("file loader",map,meta);

    //1. 根据文件内容生成带hash值的文件名
    let interpolatedName = loaderUtils.interpolateName(this,"[hash].[ext][query]",{content})
    interpolatedName = `images/${interpolatedName}`
    //2. 文件输出
    this.emitFile(interpolatedName,content);
    //3. 返回一个新的导出 模块
    return `module.exports = "${interpolatedName}"`
};

module.exports.raw = true;



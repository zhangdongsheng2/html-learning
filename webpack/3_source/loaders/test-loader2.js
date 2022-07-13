const schema = require("./schema.json");
const babel = require("@babel/core");

function test3Loader(content,map,meta) {
    console.log("hello test-loader2.js");

    // console.log('raw:',content)
    const callback = this.async();
    // 进行异步操作
    // setTimeout(() => {
    //     callback(null, content, map, meta);
    // }, 1000);

    const options = this.getOptions(schema);

    // 使用babel对代码进行编译
    babel.transform(content, options, function (err, result) {
        if (err) callback(err);
        else callback(null, result.code);
    });

    // return content;
}

// test3Loader.raw = true;

module.exports = test3Loader;

module.exports.pitch = function (remainingRequest, precedingRequest, data) {
    console.log("do somethings");
};


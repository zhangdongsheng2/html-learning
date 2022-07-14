const HtmlWebpackPlugin = require("safe-require")("html-webpack-plugin");

// plugins/clean-webpack-plugin.js
class CleanWebpackPlugin {

    constructor(tests) {
        this.tests = tests;
    }


    apply(compiler) {
        // 获取操作文件的对象
        const fs = compiler.outputFileSystem;
        // emit是异步串行钩子
        compiler.hooks.emit.tapAsync("CleanWebpackPlugin", (compilation, callback) => {
            // 获取输出文件目录
            const outputPath = compiler.options.output.path;
            // 删除目录所有文件
            const err = this.removeFiles(fs, outputPath);


            const hooks = HtmlWebpackPlugin.getHooks(compilation);
            hooks.alterAssetTagGroups.tap("CleanWebpackPlugin", (assets) => {
                assets.headTags = this.getInlineTag(assets.headTags, compilation.assets);
                assets.bodyTags = this.getInlineTag(assets.bodyTags, compilation.assets);
            });

            hooks.afterEmit.tap("CleanWebpackPlugin", () => {
                Object.keys(compilation.assets).forEach((assetName) => {
                    if (this.tests.some((test) => assetName.match(test))) {
                        delete compilation.assets[assetName];
                    }
                });
            });

            // 执行成功err为undefined，执行失败err就是错误原因
            callback(err);
        });



    }

    removeFiles(fs, path) {
        try { // 读取当前目录下所有文件
            const files = fs.readdirSync(path);
            files.forEach(file => {
                const filePath = `${path}/${file}`;
                const stats = fs.statSync(filePath);
                if (stats.isDirectory()) {
                    this.removeFiles(fs, filePath);
                } else {
                    fs.unlinkSync(filePath);
                    console.log(`删除${file}文件成功`);
                }
            });
            // 最后删除当前目录
            fs.rmdirSync(path);
        } catch (e) {
            return e
        }
    }
}

module.exports = CleanWebpackPlugin;

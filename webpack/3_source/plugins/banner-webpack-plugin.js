class BannerWebpackPlugin  {
    constructor(options = {}) {
        this.options = options;
    }

    apply(compiler){
        //需要处理文件
        const extensions = ['js','css']

        compiler.hooks.emit.tapAsync("BannerWebpackPlugin", (compilation, callback) => {
            //compilation.assets包含所有即将输出的资源
            //通过过滤只保留需要处理的文件
            const assetPaths = Object.keys(compilation.assets).filter(path => {
                const splitted = path.split('.');
                return extensions.includes(splitted[splitted.length -1])
            })

            assetPaths.forEach(assetPath => {
                const asset =  compilation.assets[assetPath]
                const source = `
                    /*
                    * Author: ${this.options.author}
                    */\n${asset.source()}
                `
                compilation.assets[assetPath] = {
                    source(){
                        return source;
                    },
                    size(){
                        return source.length;
                    }
                }
            })

            // Object.entries将对象变成二维数组。二维数组中第一项值是key，第二项值是value
            const assets = Object.entries(compilation.assets);

            let source = "# 分析打包资源大小 \n| 名称 | 大小 |\n| --- | --- |";

            assets.forEach(([filename, file]) => {
                source += `\n| ${filename} | ${file.size()} |`;
            });

            // 添加资源
            compilation.assets["analyze.md"] = {
                source() {
                    return source;
                },
                size() {
                    return source.length;
                },
            };


            callback();
        });



    }

}

module.exports = BannerWebpackPlugin




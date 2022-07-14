// plugins/inline-chunk-webpack-plugin.js
const HtmlWebpackPlugin = require("safe-require")("html-webpack-plugin");

class InlineChunkWebpackPlugin {
    constructor(tests) {
        this.tests = tests;
    }

    apply(compiler) {
        compiler.hooks.compilation.tap("InlineChunkWebpackPlugin", (compilation) => {
            const hooks = HtmlWebpackPlugin.getHooks(compilation);

            //alterAssetTagGroups 这个在流程中是标签生成后的勾子函数 https://github.com/jantimon/html-webpack-plugin/#afteremit-hook
            hooks.alterAssetTagGroups.tap("InlineChunkWebpackPlugin", (assets) => {
                /**
                 *   {
                 *     tagName: 'script',
                 *     voidTag: false,
                 *     meta: { plugin: 'html-webpack-plugin' },
                 *     attributes: { defer: true, type: undefined, src: 'js/runtime~main.js.js' }
                 *   },
                 *
                 *   {
                 *     tagName: 'script',
                 *     meta: { plugin: 'html-webpack-plugin' },
                 *     innerHTML: { defer: true, type: undefined, src: 'js/runtime~main.js.js' }
                 *   },
                 */

                // console.log(assets.headTags,assets.bodyTags)

                assets.headTags = this.getInlineTag(assets.headTags, compilation.assets);
                // assets.bodyTags = this.getInlineTag(assets.bodyTags, compilation.assets);

            });

            //删除用不到资源, 这个是html插件执行完的钩子函数
            hooks.afterEmit.tap("InlineChunkHtmlPlugin", () => {
                Object.keys(compilation.assets).forEach((assetName) => {
                    if (this.tests.some((test) => assetName.match(test))) {
                        delete compilation.assets[assetName];
                    }
                });
            });
        });
    }

    getInlineTag(tags, assets) {
        return tags.map((tag) => {
            if (tag.tagName !== "script") return tag;

            const scriptName = tag.attributes.src;
            //不是匹配的内容也直接返回
            if (!this.tests.some((test) => scriptName.match(test))) return tag;
            //修改标签内容为文件内容后返回
            return { tagName: "script", innerHTML: assets[scriptName].source(), closeTag: true };
        });
    }
}

module.exports = InlineChunkWebpackPlugin;

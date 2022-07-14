const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TestPlugin = require("./plugins/test-plugin");
const BannerWebpackPlugin = require("./plugins/banner-webpack-plugin");
const CleanWebpackPlugin  = require("./plugins/clean-webpack-plugin");
const InlineChunkWebpackPlugin  = require("./plugins/inline-chunk-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].js",
        // clean: true,
    },
    module: {
        rules: [
            /**
             * 使用 loader 的方式
             * 配置方式：在 webpack.config.js 文件中指定 loader。（pre、normal、post loader）
             * 内联方式：在每个 import 语句中显式指定 loader。（inline loader）
             * inline loader
             * 用法示例：import Styles from 'style-loader!css-loader?modules!./styles.css';
             *
             * 含义：
             * 使用 css-loader 和 style-loader 处理 styles.css 文件  modules代表参数
             * 通过 ! 将资源中的 loader 分开
             * inline loader 可以通过添加不同前缀，跳过其他类型 loader。
             *
             * ! 跳过 normal loader。
             * import Styles from '!style-loader!css-loader?modules!./styles.css';
             *
             * -! 跳过 pre 和 normal loader。
             * import Styles from '-!style-loader!css-loader?modules!./styles.css';
             *
             * !! 跳过 pre、 normal 和 post loader。
             * import Styles from '!!style-loader!css-loader?modules!./styles.css';
             *
             *
             * 4 类 loader 的执行优级为：pre > normal > inline > post 。
             * 相同优先级的 loader 执行顺序为：从右到左，从下到上。
             *
             * webpack 会先从左到右执行 loader 链中的每个 loader 上的 pitch 方法（如果有），然后再从右到左执行 loader 链中的每个 loader 上的普通 loader 方法。
             * 在这个过程中如果任何 pitch 有返回值，则 loader 链被阻断。webpack 会跳过后面所有的的 pitch 和 loader，直接进入上一个 loader 。
             *
             * 注意: rules进入到这匹配loader是根据遍历的文件来的, 有关联的文件会逐个匹配loader进行处理, 默认是匹配到几个处理几个, 加oneOf只匹配第一个.
             *      - 匹配到的所有loaders会形成一个链路, 从上到下的链路.
             *      - 然后执行 pitch 如果中间有拦截, 则所有后面匹配到的loader就不执行了.
             *
             */
            {
                test: /\.js$/,
                // loader: "./loaders/test-loader.js",
                use: [
                    {
                        loader: "./loaders/test-loader.js", // 开启多进程
                        options: {
                            author: "老王",
                            // age: 18, // 不能新增字段，不然会报错, 如果添加修改 schema.json 设置为可以添加.
                        },
                    },
                    {
                        loader: "./loaders/test-loader2.js", // 开启多进程
                        options: {
                            // author: "老王", //babel不需要这个参数要去掉
                            presets: ["@babel/preset-env"],
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "./loaders/file-loader.js",
                type: "javascript/auto", // 解决图片重复打包问题
            },
            {
              test: /\.css$/,
              // use: ["style-loader", "css-loader"],
              use: ["./loaders/style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        // new TestPlugin(),
        new BannerWebpackPlugin({
            author: "奈何和",
        }),
        new CleanWebpackPlugin(),
        new InlineChunkWebpackPlugin([/runtime.*\.js/]),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime~${entrypoint.name}.js`,
      },
    },
    mode: "production",
};

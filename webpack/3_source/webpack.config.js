const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
             * 4 类 loader 的执行优级为：pre > normal > inline > post 。
             * 相同优先级的 loader 执行顺序为：从右到左，从下到上。
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        // new TestPlugin(),
    ],
    // optimization: {
    //   splitChunks: {
    //     chunks: "all",
    //   },
    //   runtimeChunk: {
    //     name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    //   },
    // },
    mode: "production",
};

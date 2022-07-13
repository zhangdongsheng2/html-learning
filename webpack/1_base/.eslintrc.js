module.exports = {
    // 继承其他规则
    extends: ["eslint:recommended"],
    env: {
        node: true,//启用node中全局变量
        browser: true,//启用浏览器中全局变量
    },
    // 解析选项
    parserOptions: {
        ecmaVersion: 6, //es6 ES语法版本
        sourceType: "module", //es module 模块化
    },
    // 具体检查规则
    rules: {
        'no-var':2,// 不能使用var
        semi: 0, //禁止使用分号
        'array-callback-return':'warn',//强制数组方法回调函数中有 return 语句, 否则警告
        'default-case': [
            'warn', // 要求 switch 语句中有 default 分支，否则警告
            { commentPattern: '^no default$' } // 允许在最后注释 no default, 就不会有警告了
        ],
        eqeqeq: [
            'warn', // 强制使用 === 和 !==，否则警告
            'smart' // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
        ],
    },
    plugins: ["import"], // 解决动态导入import语法报错问题 --> 实际使用eslint-plugin-import的规则解决的
    // ...
    // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
};

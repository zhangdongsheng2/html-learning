const styleLoader = () => {
/*
  1. 直接使用style-loader，只能处理样式
    不能处理样式中引入的其他资源

    use: ["./loaders/style-loader"],

  2. 借助css-loader解决样式中引入的其他资源的问题

    use: ["./loaders/style-loader", "css-loader"],

    问题是css-loader暴露了一段js代码，style-loader需要执行js代码，得到返回值，再动态创建style标签，插入到页面上
    不好操作

  3. style-loader使用pitch loader用法
*/

    //====这里直接返回的js代码, 会被执行 下面详细说明
    // const script = `
    //   const styleEl = document.createElement('style');
    //   styleEl.innerHTML = ${JSON.stringify(content)};
    //   document.head.appendChild(styleEl);
    // `;
    // return script;
};


styleLoader.pitch = function (remainingRequest) {
    // remainingRequest 剩下还需要处理的loader
    // console.log(remainingRequest); // C:\Users\86176\Desktop\webpack\source\node_modules\css-loader\dist\cjs.js!C:\Users\86176\Desktop\webpack\source\src\css\index.css
    // 1. 将 remainingRequest 中绝对路径改成相对路径（因为后面只能使用相对路径操作）
    //这里得到后面执行的loader的相对路径, css-loader的执行程序的路径.
    const relativeRequest = remainingRequest
        .split("!")
        .map((part) => {
            return this.utils.contextify(this.context, part)
        })
        .join("!")
    // console.log(relativePath); // ../../node_modules/css-loader/dist/cjs.js!./index.css


    //这里的import 是直接执行上面的css-loader, 得到结果赋值给 style. 双感叹号是 阻止其他loader执行, 只执行内联loader然后返回结果.
    //这个返回值, 会返回给后面匹配到的loader, 如果没有匹配到的loader, 最终会输出到 main.js中, 加载到 html页面中, 打开页面会执行.
    //在普通loader执行完成后, 会检查到 内联 loader, 会把内联loader执行完成后在输出到main.js中.
    return `
        import style from "!!${relativeRequest}"
        const styleEl = document.createElement('style')
        styleEl.innerHTML = style
        document.head.appendChild(styleEl)
    `;
};

module.exports = styleLoader










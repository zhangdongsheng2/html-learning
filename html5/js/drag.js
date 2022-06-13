(function (w) {
        w.$ = {};
        $.drag = function (testNode, callBack) {

            //鼠标点击的开始位置
            let startPoint = {x:0,y:0}
            let mouseDownPoint = {x:0,y:0}

            testNode.onmousedown = function (ev) {
                ev=ev||event

                startPoint.x = testNode.offsetLeft;
                startPoint.y = testNode.offsetTop;
                mouseDownPoint.x = ev.clientX;
                mouseDownPoint.y = ev.clientY;

                document.onmousemove = function (ev) {
                    ev=ev||event

                    let L = startPoint.x + (ev.clientX - mouseDownPoint.x);

                    if (L < 0) {
                        L = 0;
                    }else if (L > testNode.parentNode.clientWidth - testNode.offsetWidth) {
                        L = (testNode.parentNode.clientWidth - testNode.offsetWidth);
                    }

                    testNode.style.left = L + "px";


                    if (callBack && callBack["move"] && typeof callBack["move"] === "function") {
                        callBack["move"].call(testNode);
                    }

                };

                document.onmouseup = function () {
                    document.onmousemove = document.onmouseup = null;
                };

                return false;//禁止 ie8 的默认行为.

            };

        }
    }
)(window)

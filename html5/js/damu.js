(function (w) {
        w.damu = {};
        damu.drag = function (damuIn, flag, value, zaw) {

            //node拖拽的元素
            //flag是否现在范围
            //value 吸附程度
            //node2 碰撞元素

            let adsorption = 0;
            //鼠标点击的开始位置
            let startPoint = {x:0,y:0}
            let mouseDownPoint = {x:0,y:0}

            damuIn.onmousedown = function (ev) {
                ev=ev||event
                startPoint.x = this.getBoundingClientRect().left
                startPoint.y = this.getBoundingClientRect().top
                mouseDownPoint.x = ev.clientX;
                mouseDownPoint.y = ev.clientY;

                console.log(startPoint)

                document.onmousemove = function (ev) {
                    ev=ev||event
                    let mouseMovePoint = {x:0,y:0}
                    mouseMovePoint.x = ev.clientX;
                    mouseMovePoint.y = ev.clientY;

                    console.log(mouseMovePoint)

                    let dis={x:0,y:0}
                    dis.x = mouseMovePoint.x - mouseDownPoint.x
                    dis.y = mouseMovePoint.y - mouseDownPoint.y


                    let L = startPoint.x + dis.x;
                    let T = startPoint.y + dis.y;

                    if (flag) {
                        if (value) {
                            adsorption = value;
                        }
                        if (L < adsorption) {
                            L = 0;
                        }
                        if (T < adsorption) {
                            T = 0;
                        }

                        if (L > document.documentElement.clientWidth - damuIn.offsetWidth - adsorption) {
                            L = (document.documentElement.clientWidth - damuIn.offsetWidth);
                        }

                        if (T > document.documentElement.clientHeight - damuIn.offsetHeight - adsorption) {
                            T = (document.documentElement.clientHeight - damuIn.offsetHeight);
                        }
                    }

                    damuIn.style.left = L + "px";
                    damuIn.style.top = T + "px";

                    //碰撞检测
                    let T1 = damuIn.offsetTop;
                    let B1 = damuIn.offsetTop + damuIn.offsetHeight;
                    let L1 = damuIn.offsetLeft;
                    let R1 = damuIn.offsetLeft + damuIn.offsetWidth;

                    let T2 = zaw.offsetTop;
                    let B2 = zaw.offsetTop + zaw.offsetHeight;
                    let L2 = zaw.offsetLeft;
                    let R2 = zaw.offsetLeft + zaw.offsetWidth;

                    if(R1 < L2 || B1 < T2 || L1>R2 ||T1>B2){
                        zaw.src = "img/a.png";
                    }else {
                        zaw.src = "img/b.png";
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

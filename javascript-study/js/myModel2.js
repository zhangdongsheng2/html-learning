(function (w) {
    //私有数据
    var msg = "my Hello"

    function doUp() {
        console.log("myModel2,doUp",msg.toUpperCase())
    }

    function doLow() {
        console.log("myModel2,doLow",msg.toLowerCase())
    }

    w.myModel2 = {
        doUp:doUp,
        doLow: doLow
    }

})(window)

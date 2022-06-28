function myModel() {
    //私有数据
    var msg = "my Hello"

    function doUp() {
        console.log("doUp",msg.toUpperCase())
    }

    function doLow() {
        console.log("doLow",msg.toLowerCase())
    }
    return {
        doUp:doUp,
        doLow: doLow
    }
}

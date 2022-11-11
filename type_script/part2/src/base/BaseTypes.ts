// 游戏控制器，控制其他的所有类
class BaseTypes {
    run(){
        console.log("----变量类型")
        let a: number;//声明一个变量并指定类型
        a = 10;
        console.log(`number = ${a}`)
        //a = 'hello' //这样会报错因为指定了类型
        let b: string
        b = 'hello'
        console.log(`string = ${b}`)

        //自动类型推断, 类型为 string 不可错误赋值
        let c = 'hello'
        //c = 10;

        function sum(d: number, e: number):number{
            return d+e;
        }
        console.log("function sum = "+sum(2,2))

        let f: "male" | "female" | 2;
        f = "male"
        f = 2
        // f = "ddd"
        console.log("联合类型 + 枚举值 = "+f)

        let g: boolean | string
        g = true
        g = "def"
        console.log("联合类型,一个变量多个类型="+g)


        let h;
        h = 22;
        h = true;
        h = "dddd";
        console.log("any类型, 变量不指定类型, 默认是any = "+h)

        /*
           unknown 表示未知类型的值
           类型any，它可以赋值给任意变量
           unknown 实际上就是一个类型安全的any
           unknown类型的变量，不能直接赋值给其他变量
         */
        // b = h //这样是赋值类型不安全的, 类型不匹配会报错

        let i: unknown
        i = 10
        i = "dd"

        console.log("unkonwn 类型 = "+i)
        if(typeof i === "string"){
            b = i
        }


        /**
        * 类型断言，可以用来告诉解析器变量的实际类型.  (只是赋值使用, 如果写错不影响执行)
        * 语法：
        *   变量 as 类型
        *   <类型>变量
        * */

        let j:number
        j = i as number
        j = <number>i;
        // j = 22

        console.log("----类型断言" +j )


        // void 用来表示空，以函数为例，就表示没有返回值的函数
        function fn():void{
            console.log("void 函数")
        }
        console.log(fn())
        function fn2(): never{
            throw new Error('报错了！');
        }
        // console.log(fn2())

        // object 表示 js 的一个对象
        console.log("----object以及{} 的用法")
        let k :object
        k = {}
        k = function (){}
        k = {
            name:'222'
        }
        //这里不可以像js那样随便获取属性
        // console.log(k.name)
        console.log(k)

        // {}语法用来指定对象可以包含的属性
        // 属性名后加 ? 表示属性是可选的
        let l: {name: string,age?:number}
        l = {name:"算悟空", age:11}
        l = {name: "zhubajie"}
        //l = {name:'dd',age:22,gender:"男"}
        console.log("{}语法对象=",l)

        // [propName:string]: any 表示任意类型的属性
        let m: {name:string,[propName:string]:any}
        m = {name:'dd',age:22,gender:"男"}
        console.log("{}语法任意类型对象=",m)

        console.log("----函数结构的声明")
        // 语法: (形参: 类型, 形参:类型 ....) => 返回值
        let n: (a:number,b:number)=>number;
        n = function (a:number,b:number):number{
            return 10
        }
        console.log("函数返回值 n = "+n(2,2))

        console.log("----数组类型声明")
        //类型[]  Array<类型>
        let o: string[]
        o = ['a','b','c']
        console.log("类型[],",o)

        let p: Array<number>
        p = [1,2,3]
        console.log("Array=",p)

        /*
        *   元组，元组就是固定长度的数组
        *       语法：[类型, 类型, 类型]
        * */
        console.log("----元组类型声明")
        let q:[string,number]
        q = ['hello',123]
        console.log("元组=",q)

        // enum 枚举
        console.log("----枚举类型声明")
        enum Gender{
            Male,
            Female
        }
        let r:{name:string,gender:Gender}
        r = {
            name:"sun",
            gender: Gender.Female
        }
        console.log("gender枚举值: ",r)


        // & 表示同时
        console.log("----& 表示同时")
        let s:{name:string} & {age:number}
        s = {name: "ddd",age:22}
        console.log("&关联的{},",s)

        console.log("----类型别名")
        type myType = 1 | 2 | 3 | 4 | 5
        let t: myType
        let t2: myType
        t = 1

        type myNumber = number
        let t3: myNumber
        t3 = 222;
        console.log("类型别名,",t3)


        console.log("----dom使用, 用 ! 判断是否为空")
        let box1 = document.getElementById('box1')

        if(box1 !== null){
            box1.addEventListener('click',function (){
                alert('hello')
            })
        }
        box1!.addEventListener('click',function (){
            alert('hello')
        })


    }


}

export default BaseTypes;

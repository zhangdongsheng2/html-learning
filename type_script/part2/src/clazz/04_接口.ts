//描述一个对象的类型
type myType = {
    name:string,
    age:number
}


interface myInterface{
    name:string;
    age:number;
}

interface myInterface{
    gender: string
}

//相当于一个对象, 实现了接口, 必须要有接口中所有属性
export const obj:myInterface = {
    name: 'aaa',
    age:2,
    gender:'男'
}

/*
* 接口可以在定义类的时候去限制类的结构，
*   接口中的所有的属性都不能有实际的值
*   接口只定义对象的结构，而不考虑实际值
*       在接口中所有的方法都是抽象方法
* */

interface myInter{
    name:string;
    sayHello():void;
}

/*
* 定义类时，可以使类去实现一个接口,
*   实现接口就是使类满足接口的要求
* */
export class MyClass implements myInter,myInterface{
    name:string;
    constructor(name:string) {
        this.name = name
    }
    sayHello() {
        console.log("你好啊")
    }

    age: number = 22;
    gender: string = '男';
}

//======函数类型接口============
/*
  为了使用接口表示函数类型，我们需要给接口定义一个调用签名。
  它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
  函数类型:通过接口的方式作为函数的类型来使用; 定义一个接口,用来作为某个函数的类型使用
 */
interface ISearchFunc {
    // 定义一个调用签名
    (source: string, subString: string): boolean
}

// 定义一个函数,该类型就是上面定义的接口
const searchString: ISearchFunc = function (source: string, subString: string): boolean {
    // 在source字符串中查找subString这个字符串
    return source.search(subString) > -1
}

// 调用函数
console.log(searchString('哈哈,我又变帅了', '帅'))























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
export class MyClass implements myInter{
    name:string;
    constructor(name:string) {
        this.name = name
    }
    sayHello() {
        console.log("你好啊")
    }
}











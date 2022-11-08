// TS可以在属性前添加属性的修饰符
/*
*   public 修饰的属性可以在任意位置访问（修改） 默认值
*   private 私有属性，私有属性只能在类内部进行访问（修改）
*       - 通过在类中添加方法使得私有属性可以被外部访问
*   protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）
*
* */

export class Person{
    private _name:string
    private _age: number

    constructor(name:string,age:number) {
        this._age = age
        this._name = name
    }
    /*
    *   getter方法用来读取属性
    *   setter方法用来设置属性
    *       - 它们被称为属性的存取器
    * */


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}



export class C{
    // 可以直接将属性定义在构造函数中
    constructor(public name: string,public age:number) {
    }
}







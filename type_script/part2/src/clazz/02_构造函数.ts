class Dog{
    name:string;
    age:number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name:string,age:number) {
        // 在实例方法中，this就表示当前当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        this.name = name
        this.age = age
    }


    bark(){
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log("hello 大家好我是=",this.name);
    }

    //函数类型的属性, 完整写法.
    // public add3: (x: number, y: number) => number = function (x: number, y: number): number {
    // 简化写法
    public add3 = function (x: number, y: number): number {
        return x+y
    }

    /*
    可选参数:函数在声明的时候,内部的参数使用了?进行修饰,那么就表示该参数可以传入也可以不用传入,叫可选参数
    默认参数:函数在声明的时候,内部的参数有自己的默认值,此时的这个参数就可以叫默认参数
     */
    public getFullName = function (firstName: string='东方', lastName?: string): string {
        // 判断名字是否传入了
        if (lastName) {
            return firstName + '_' + lastName
        } else {
            return firstName
        }
    }

    /**
     * 剩余参数 (rest参数), 剩余参数是放在函数声明的时候所有的参数的最后
     * @param str
     * @param str2
     * @param args ...args:string[] ---->剩余的参数,放在了一个字符串的数组中,args里面
     */
    showMsg(str: string,str2:string, ...args: string[]) {
        console.log(str) // a
        // console.log(str2) // b
        console.log(args) // b ,c ,d ,e
    }


    test(){
        // 函数调用
        // 什么也不传入
        console.log(this.getFullName())
        // 只传入姓氏
        console.log(this.getFullName('诸葛'))
        // 传入姓氏和名字
        console.log(this.getFullName('诸葛','孔明'))
        this.showMsg('a','b','c','d','e')
    }
}


export default Dog;























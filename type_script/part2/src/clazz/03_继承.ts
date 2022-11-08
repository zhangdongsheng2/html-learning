//定义一个动物类, 并且指定为抽象类
/*
*   以abstract开头的类是抽象类，
*       抽象类和其他类区别不大，只是不能用来创建对象
*       抽象类就是专门用来被继承的类
*       抽象类中可以添加抽象方法
* */
export abstract class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    sayHello() {
        console.log("动物叫~")
    }

    // 定义一个抽象方法
    // 抽象方法使用 abstract开头，没有方法体
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract run():void;
}


/*
* Pig extends Animal
*   - 此时，Animal被称为父类，Pig被称为子类
*   - 使用继承后，子类将会拥有父类所有的方法和属性
*   - 通过继承可以将多个类中共有的代码写在一个父类中，
*       这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
*       如果希望在子类中添加一些父类中没有的属性或方法直接加就行
*   - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
*       这种子类覆盖掉父类方法的形式，我们称为方法重写
* */

// 使Pig类继承Animal类
export class Pig extends Animal {
    nikeName:string
    constructor(name:string,age:number,nikeName:string) {
        super(name,age);
        this.nikeName = nikeName
    }
    run() {
        console.log(`${this.name}在跑~~~`)
    }

    sayHello() {
        super.sayHello()
        console.log("汪汪汪")
    }
}

//定义一个猫 继承 自动物
export class Cat extends Animal {
    sayHello() {
        console.log("喵喵喵~~~")
    }
    run() {
    }
}







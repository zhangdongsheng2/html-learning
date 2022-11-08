import Person from './01_类的简介';
import Dog from './02_构造函数';
import {Pig,Cat} from './03_继承';
import {obj,MyClass} from './04_接口';
import {C,Person as Person2} from './05_属性封装';
import {MyClass as MyClassT, fn3, fn2, fn} from './06_泛型';


function testClazz() {
    console.log("----类的简介")
    const per = new Person();
    console.log('name=',per.name)
    console.log('只读类属性age = ',Person.age)
    //Person.age = 2; //类只读属性不可修改
    Person.sex = 1
    console.log("可以读写属性sex = ",Person.sex)

    console.log("----构造函数")
    const dog = new Dog("小黑",2)
    const dog2 = new Dog("小白",2)
    console.log("构造函数对象=",dog)
    console.log("构造函数对象2=",dog2)

    console.log("----继承")
    const pig = new Pig('哼哼',2,"pik")
    console.log("pig = ",pig)
    pig.run()
    pig.sayHello()
    const cat = new Cat("m",2)
    console.log(cat)

    console.log("----接口")
    console.log(obj)
    console.log("myClass =",new MyClass("nihao"))

    console.log("----属性封装")
    const p2 = new Person2("nihao",2)
    console.log(p2.age);
    p2.age = 22
    console.log(p2.age)

    const c = new C('dd',2)
    console.log(c)


    console.log("----泛型")
    const res = fn(10)
    console.log(res)

    console.log(fn<string>("222"))

    console.log(fn2<number,string>(12,'ddd'))
    const mc = new MyClassT<string>('sunhuw')
    console.log(mc)

}

export default testClazz;








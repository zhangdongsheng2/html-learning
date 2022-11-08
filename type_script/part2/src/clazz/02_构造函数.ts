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
}


export default Dog;
























/*
*   在定义函数或是类时，如果遇到类型不明确就可以使用泛型
* */
export function fn<T>(a:T):T{
    return a;
}

export  function fn2<T,K>(a:T,b:K):T{
    console.log(b)
    return a;
}



interface Inter{
    length:number
}

export function fn3<T extends Inter>(a:T):number{
    return a.length
}


export class MyClass<T>{
    name:T;
    constructor(name:T) {
        this.name = name
    }
}



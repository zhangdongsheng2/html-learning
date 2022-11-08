import {hi} from './m1';
import BaseTypes from './base/BaseTypes';
import testClazz from './clazz/test';

function sum(a: number, b: number):number{
    return  a + b;
}

var obj = {name:"孙悟空", age:33};
console.log(obj);
obj.age = 18;
console.log(obj);
console.log(sum(123, 456));
console.log('哈哈');
console.log(hi);

let fn = (a: number, b: number) => a + b;
fn(123 , 456);
fn(77, 22);

console.log("============基本数据类型===================")
const baseType = new BaseTypes();
baseType.run();

console.log("============类的简介使用===================")
testClazz()

console.log("============贪吃蛇===================")
import './style/index.less';
// import Food from './moduls/Food';
// const food =  new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);
import GameControl from "./game/GameControl";
const gameControl = new GameControl();











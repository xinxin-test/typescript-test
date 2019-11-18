
import React from 'react';

import styles from './Generic.css';

function identity<T>(arg: T): T {
  return arg;
}

// 把范型当作类型的一部分
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

// 范型接口，函数
interface GenericIdentityFn {
  <T>(arg: T): T;
}
let myIdentity: GenericIdentityFn = identity;
// 想把泛型参数当作整个接口的一个参数
interface GenericIdentityFn2<T> {
  (arg: T): T;
}
let myIdentity2: GenericIdentityFn2<number> = identity;

// 范型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 123;
myGenericNumber.add = function(x, y){
  return x + y;
}
// alert(myGenericNumber.add(myGenericNumber.zeroValue, 123));

// 范型约束
interface Lengthwise {
  length: number;
}
// 范型类型继承一个接口，这个接口拥有length属性，这个用来约束范型
function loggingIdentity3<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}
// loggingIdentity3(3); 传入的值必须有length属性，数字3没有length属性
// loggingIdentity3([1,2,3])

// 使用范型约束，约束参数类型
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

function create<T>(c: {new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
  constructor(hasMask: boolean) {
    this.hasMask = hasMask
  }
}
class ZooKeeper {
  nametag: string = 'zoo';
}
class Animal {
  numLegs: number = 0;
  // constructor(numLegs: number) {
  //   this.numLegs = numLegs;
  // }
}
class Bee extends Animal {
  keeper: BeeKeeper;
  constructor(keeper: BeeKeeper) {
    super();
    this.keeper = keeper;
  }
}
class Lion extends Animal {
  keeper: ZooKeeper;
  constructor(keeper: ZooKeeper) {
    super();
    this.keeper = keeper;
  }
}
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
// console.log(createInstance(Lion))
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page Generic</h1>
      <p>
        不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
      </p>
    </div>
  );
}

import React from 'react';
import styles from './Interface.css';
import { render } from 'react-dom';
import { SearchSource } from '@jest/core';

// 啥时候使用接口

// 使用接口确保拥有指定类型的结构
interface loggerInterface {
  log(arg: any): void;
}

// 类实现一个接口，类拥有接口的类型
class Logger implements loggerInterface {
  x = 0;
  y = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  log(arg: any) {
    if (typeof console.log === 'function') {
      console.log(arg)
    } else {
      alert(arg)
    }
  }

  // 类实现一个接口的时候，编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。如果有多出来的方法或者属性，不会报错
  foo(a: number) {
    return a;
  }

  render() {
    <p>test</p>
  }
}

// const logObj = new Logger(3, 4);

// 使用接口描述一个对象的类型，该对象拥有接口的类型，多一个或者少一个属性或方法。都会报错
const Logger1: loggerInterface = {
  log: (arg: any) => {
    if (typeof console.log === 'function') {
      console.log(arg)
    } else {
      alert(arg)
    }
  }
}

interface LabelledValue {
  label: string;
  // 可选属性
  color?: string;
  // 可选只读属性
  readonly x?: number;
  // 只读数组类型
  a?: ReadonlyArray<number>
}

function PrintLabel(props: LabelledValue) {
  // console.log(label);

  // 只读属性不能修改，但是可以通过创建一个新的变量来修改
  // props.x = 10;

  let a: number[] = [1, 2, 3, 4];
  return (
    <>
      <p>---------------------我是分割线-----------------------------------</p>
      <p>{props.label}</p>
      {/* <p>{props.size}</p> */}
      <p>{props.color}{props.x}</p>
      <p>{props.a && props.a.join(',')}</p>
    </>
  );
}

// const myObj = {size: 10, label: "Size 10 Object"};
// PrintLabel(myObj);

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

// =============================================================================================
class Control {
  private state: any;
}
// 接口继承类
interface SelectableControl extends Control {
  select(): void;
}
// 这个接口类型只能被这个类或其子类所实现（implement）
class Button extends Control implements SelectableControl {
  select() { }
}
// class Image implements SelectableControl {
//   select() { }
// }

// =============================================================================================

export default function () {
  const myObj = { size: 10, label: "将对象赋值给一个变量，可以绕过类型检查，即使该对象包含一个目标类型里面没有的变量，编译也不会报错" };

  // 接口描述函数类型
  interface SearchFunc {
    // 参数列表和返回值定义的类型，参数列表里的每个参数都需要名字和类型
    (source: string, subString: string): Boolean
  }

  // 创建一个函数类型的变量
  let mySearch: SearchFunc;
  // 将一个同类型的函数赋值给这个变量
  mySearch = function (source: string, subString: string): Boolean {
    const result = source.search(subString);
    return result > -1;
  }
  // 函数的参数名不需要与接口里定义的名字相匹配
  // 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。
  // 也可以不指定参数类型和返回值类型，typescript的类型推断会推断出参数的类型和返回值的类型
  mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
  }

  const article = '小王子是一个超凡脱俗的仙童，他住在一颗只比他大一丁点儿的小行星上。陪伴他的是一朵他非常喜爱的小玫瑰花。但玫瑰花的虚荣心伤害了小王子对她的感情。小王子告别小行星，开始了遨游太空的旅行。他先后访问了六个行星，各种见闻使他陷入忧伤，他感到大人们荒唐可笑、太不正常。只有在其中一个点灯人的星球上，小王子才找到一个可以作为朋友的人。但点灯人的天地又十分狭小，除了点灯人他自己，不能容下第二个人。在地理学家的指点下，孤单的小王子来到人类居住的地球。';

  const littlePrince = '小王子';

  interface StringArray {
    [index: number]: string;
  }
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
  let myStr: string = myArray[0];

  interface NumberDictionary {
    // 
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
    name: any
  }

  interface Dictionary {
    // 数字索引的返回值必须是字符串索引返回值类型的子类型，或者相同类型
    // [x: number]: string;
    [x: string]: number;
  }

  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
  // myArray2[2] = "Mallory"; // error!

  interface Shape {
    color: string
  }
  interface PenStroke {
    penWidth: number
  }
  interface Square extends Shape, PenStroke {
    sideLength: number
  }

  let square: Square = {
    color: 'bule',
    sideLength: 10,
    penWidth: 20
  };

  return (
    <div className={styles.normal}>
      <h1>Page Interface</h1>
      <div style={{ textAlign: 'left' }}>
        TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
        <p>使用接口确保拥有指定类型的结构</p>
        <ol>
          <li>
            类实现一个接口，类拥有接口的类型
          </li>
          <li>
            使用接口描述一个对象的类型，该对象拥有接口的类型，对象字面量会经过额外的属性检查，多一个或者少一个属性或方法。都会报错，有些方法可以绕过属性检查：
            <ul>
              <li>
                使用类型断言
              </li>
              <li>
                添加字符串索引签名
              </li>
              <li>
                将对象赋值给一个变量
              </li>
            </ul>
          </li>
          <li>
            接口描述函数类型
          </li>
          <li>
            接口描述范型的类型
          </li>
        </ol>
        <div>
          接口的属性类型
          <ol>
            <li>
              普通类型
            </li>
            <li>
              可选类型
            </li>
            <li>
              只读类型
            </li>
            <li>
              可索引类型
              <ul>
                <li>
                  共支持两种索引类型：字符串索引，数字索引
                </li>
                <li>
                  该类型拥有一个索引签名，拥有不限个数的值
                </li>
                <li>
                  可以将索引签名设置为只读
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <PrintLabel label="哈哈哈" x={12} a={[1, 2, 3]} />
      <PrintLabel {...myObj} />
      {/* 包含了一个目标类型没有的属性：size，编译报错 */}
      {/* <PrintLabel size={10} label="Size 10 Object" /> */}

      {/* 接口描述函数类型 */}
      <p>=============================================================================================</p>
      <p>
        文章：{article}<br></br>{mySearch(article, littlePrince) || '不'}包含{littlePrince}这三个字
      </p>
      <p>{myArray2[2]}</p>
    </div>
  );
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {

  return {
    color: config.color ? config.color : 'red',
    area: config.width ? config.width * config.width : 0
  }
}

// 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// 目标类型SquareConfig没有包含一个colour属性，因此会报错
// let mySquare1 = createSquare({ colour: "red", width: 100 });
// 使用类型断言绕开检查
let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig)

interface SquareConfig2 {
  color?: string;
  width?: number;
  // 添加一个字符串索引签名，这个对象可能具有某些作为特殊使用的额外属性
  // 但在这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。
  [propName: string]: any;
}

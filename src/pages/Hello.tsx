
import React from 'react';

import styles from './Hello.css';

// 定义一个接口用来验证组件的props
interface HelloProps { compiler: string; framework: string; };

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

function HelloBoy({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}


// export class Hello extends React.Component<HelloProps, {}> {
//   render() {
//       return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//   }
// }

const a: number[] = [1, 3, 5];

// const b: number = undefined;

// 类型断言
let someValue: any = "this is a string";
// TypeScript里使用JSX时，只有as语法断言是被允许的。
// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

export default function() {
  return (
    <div className={styles.normal}>
      <Hello compiler="123" framework="456" />
      <HelloBoy name="xinxin" />
    </div>
  );
}

// 类型断言，有时也叫做转换。 当你比类型检查器更清楚一个表达式的类型的时候，你可以通过这种方式通知TypeScript。

// TypeScript还有一种感叹号（!）结尾的语法，它会从前面的表达式里移除null和undefined。 所以我们也可以写成document.getElementById('root')!，但在这里我们想写的更清楚些。

function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    // 当一个变量出现在赋值操作的左手边时，会进行 LHS 查询
    var x = 10;
    // 当一个变量出现在赋值操作的右手边时，会进行 RHS 查询。
    let b = x;
  }

  return x;
}

// f(true);  // returns '10'
// f(false); // returns 'undefined'

// 对于一个变量赋值，发生了两个不同的动作：第一，编译器 声明一个变量（如果先前没有在当前作用域中声明过），第二，当执行时，引擎 在 作用域 中查询这个变量并给它赋值，如果找到的话。

// function foo(a) {
// 	var b = a;
// 	return a + b;
// }

// var c = foo( 2 );

// ReferenceError 是关于 作用域 解析失败的，而 TypeError 暗示着 作用域 解析成功了，但是试图对这个结果进行了一个非法/不可能的动作。

// 向变量赋值LHS左手边引用，未被满足的 LHS 引用会导致一个自动的，隐含地创建的同名全局变量（如果不是“Strict模式”[1:2]），或者一个 ReferenceError（如果是“Strict模式”[1:3]）。

// 查询变量为了取得变量的值，RHS右手边引用，未被满足的 RHS 引用会导致 ReferenceError 被抛出。

// 词法作用域是在词法分析时被定义的作用域。换句话说，词法作用域是基于，你，在写程序时，变量和作用域的块儿在何处被编写决定的，因此它在词法分析器处理你的代码时（基本上）是固定不变的。

// 不管函数是从 哪里 被调用的，也不论它是 如何 被调用的，它的词法作用域是由这个函数被声明的位置 唯一 定义的。

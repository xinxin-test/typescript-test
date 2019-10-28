import React from 'react';
import styles from './Interface.css';

// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

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
    if(typeof console.log === 'function' ) {
      console.log(arg)
    }else {
      alert(arg)
    }
  }

  // 编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
  foo(a: number) {
    return a;
  }

  render() {
    <p>test</p>
  }
}

// const logObj = new Logger(3, 4);

// 对象拥有接口的类型
const Logger1: loggerInterface = {
  log: (arg: any) => {
    if(typeof console.log === 'function' ) {
      console.log(arg)
    }else {
      alert(arg)
    }
  }
}

Logger1.log(123);

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page Interface</h1>
    </div>
  );
}

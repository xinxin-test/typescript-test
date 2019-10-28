
import React from 'react';

import styles from './Class.css';

// 用类描述一个对象或者实例
class Person {
  public name: string;
  public surname: string;
  public email: string;
  public age: number = 10;
  sex: string = 'g';

  constructor(name: string, surname: string, email: string) {
    this.name = name;
    this.surname = name;
    this.email = name;
  }
  greet() {
    alert("hi");
  }
}

const me: Person = new Person('xinxin', 'xiaokeai', 'xinxin@qq.com')
// me.greet();

export default function() {
  return (
    <div className={styles.normal}>
      <p>基本类型： boolean， number，string， array， void</p>
      <p>用户自定义的enum类型</p>
    </div>
  );
}

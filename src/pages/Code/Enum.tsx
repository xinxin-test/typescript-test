
import React from 'react';

import styles from './Enum.css';

// 一个枚举
enum Enum {
  A, //枚举值默认为数字，从0开始
  B
}
let b = Enum.B; // 枚举值：b = 1
Enum[b] // B,实现枚举值到枚举名的反向映射

// 常数枚举
const enum Enum2 {
  A = 1,
  B = A * 2
}

export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page Enum</h1>
      <p>一个枚举类型可以包含零个或多个枚举成员。
枚举成员具有一个数字值，它可以是<em>常数</em>或是<em>计算得出的值</em>
        当满足如下条件时，枚举成员被当作是常数：</p>
      <ul>
        <li>不具有初始化函数并且之前的枚举成员是常数。
      在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。
      但第一个枚举元素是个例外。
如果它没有初始化方法，那么它的初始值为<code>0</code>。</li>
        <li>枚举成员使用<em>常数枚举表达式</em>初始化。
      常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。
      当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
    <ul>
            <li>数字字面量</li>
            <li>引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）
  如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用。</li>
            <li>带括号的常数枚举表达式</li>
            <li><code>+</code>, <code>-</code>, <code>~</code> 一元运算符应用于常数枚举表达式</li>
            <li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code>, <code>&amp;</code>, <code>|</code>, <code>^</code> 二元运算符，常数枚举表达式做为其一个操作对象。
若常数枚举表达式求值后为<code>NaN</code>或<code>Infinity</code>，则会在编译阶段报错。</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

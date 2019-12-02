
import React from 'react';

import styles from './IIFE.css';

const o = {
  a: 1
};

// undefined = true; // 默认的undefined标识符的值也许会被不正确地覆盖掉，而导致意外的结果，
/* 
 * 严格模式下为undefined赋值会报错
 */
(function IIFE1(undefined) {
  // 通过将参数命名为undefined，同时不为它传递任何参数值，我们就可以保证在一个代码块中 undefined 标识符确实是是一个未定义的值。
  var a;
  if (a === undefined) {
    // console.log("Undefined is safe here!");
  }

})();

(function IIFE2(def) {
  def(o);
})(function def(o: any) {

  var a = 3;
  // console.log(a); // 3
  // console.log(o.a); // 2

});

// for (var i=0; i<10; i++) {
//   // console.log( i );
//   var p = 'eee';
// }
// console.log(p) //'eee' 表面上看来，JavaScript 没有块儿作用域的能力

// let 关键字声明一个变量，会附着在它所在的块作用域中
if (o) {
  // 我们可以在一个语句是合法文法的任何地方，通过简单地引入一个 { .. } 来为 let 创建一个任意的可以绑定的块儿
  { // <-- 明确的块儿
    let bar = 2;
    bar = 3;
    // console.log( bar );
  }
}

// console.log(foo) // undefined
var a = true;
if (a) {
  function foo() { console.log("a"); }
}
else {
  function foo() { console.log("b"); }
}
// console.log(foo) //function foo() { console.log("a"); }
// 搞不懂，搞不懂

export default function () {
  return (
    <div className={styles.normal}>
      <p>函数是最常见的作用域单位</p>
      <p>尽可能靠近地，尽可能局部地，在变量将被使用的位置声明它</p>
      <p>
        js引擎会在解释执行js代码前编译它，编译过程有一个步骤就是找到所有的声明，并将它们关联在合适的作用域上，这个是词法作用域的核心
      </p>
      <p>变量和函数声明， 只有声明本身被提升了，而任何赋值或者其他的执行逻辑都被留在 原处。如果提升会重新安排我们代码的可执行逻辑，那就会是一场灾难了。</p>
      <p>提升是以作用域为单位的，函数首先会被提升，然后才是变量提升</p>
    </div>
  );
}

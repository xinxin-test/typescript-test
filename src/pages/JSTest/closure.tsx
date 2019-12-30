
import React from 'react';

import styles from './closure.css';

function foo() {
  var a = 2;

  function bar() {
    // console.log( a );
  }

  return bar;
}

var baz = foo();

baz(); // 2 -- 哇噢，看到闭包了，伙计。

// for (var i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i ); // 打印出6个6
// 	}, i*1000 );
// }

// for (var i=1; i<=5; i++) {
//   // 利用匿名函数创建一个词法作用域，在词法作用域中保存i变量，词法作用域会一直持有外部的i变量
// 	(function(){
// 		var j = i;
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})();
// }

// for (var i=1; i<=5; i++) {
// 	(function(j){
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})( i );
// }

// for (var i=1; i<=5; i++) {
//   let j = i; // 呀，给闭包的块儿作用域！
//   // let关键字劫持一个块，并在块中声明一个变量
// 	setTimeout( function timer(){
// 		console.log( j );
// 	}, j*1000 );
// }

// for (let i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }

// 只想要一个实例
var foo2 = (function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();
foo2.doSomething(); // cool
foo2.doAnother(); // 1 ! 2 ! 3


// 模块可以接受一个参数
function CoolModule(id: any) {
  function identify() {
    console.log(id);
  }

  return {
    identify: identify
  };
}
var foo1 = CoolModule("foo 1");
var foo3 = CoolModule("foo 2");
foo1.identify(); // "foo 1"
foo3.identify(); // "foo 2"


var foo4 = (function CoolModule(id) {
  function change() {
    // 修改公有 API
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log(id);
  }

  function identify2() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})("foo module");
foo4.identify(); // foo module
foo4.change();
foo4.identify(); // FOO MODULE


var MyModules = (function Manager() {
  // 存储内部模块列表，使用名称追踪
  var modules: any = {};

  function define(name: string, deps: any[], impl: any) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }

  function get(name: string) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };
})();
MyModules.define("bar", [], function () {
  function hello(who: string) {
    return "Let me introduce: " + who;
  }

  return {
    hello: hello
  };
});
MyModules.define("foo", ["bar"], function (bar: any) {
  var hungry = "hippo";

  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }

  return {
    awesome: awesome
  };
});
var bar = MyModules.get("bar");
var foo5 = MyModules.get("foo");
// console.log(
//   bar.hello("hippo")
// ); // Let me introduce: hippo
foo5.awesome(); // LET ME INTRODUCE: HIPPO


function createCounter() {
  let counter = 0
  const myFunction = function () {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
// console.log('example increment', c1, c2, c3); // 1, 2, 3





export default function () {
  return (
    <div className={styles.normal}>
      <p>闭包是依赖于词法作用域编写代码而产生的结果。</p>
      <p>闭包就是函数能够记住并访问它的词法作用域，即使当这个函数在它的词法作用域之外执行时。</p>
      <p>
        js采用词法作用域，在编译阶段变量的声明和函数的声明就已经定好了，所以函数能够记住并且访问他的词法作用域
      </p>
      <p>
        无论使用什么方法，将内部函数传递到词法作用域的外面，它都将维护一个指向它一开始的被声明时的作用域的引用，而无论什么时候执行这个被传递的内部函数，这个闭包都会行驶
      </p>
      <p>行使模块模式有两个“必要条件”:</p>
      <ol>
        <li>
          必须有一个外部的外围函数，而且它必须至少被调用一次（每次创建一个新的模块实例）。
        </li>
        <li>
          外围的函数必须至少返回一个内部函数，这样这个内部函数才拥有私有作用域的闭包，并且可以访问和/或修改这个私有状态。
        </li>
      </ol>
    </div>
  );
}

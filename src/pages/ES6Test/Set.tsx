
import React from 'react';

import styles from './Set.css';

// Set 接受一个数组
const p1 = new Set([1, 1, 2, true, true, 'aaa', 'bbb', 'aaa']);
// console.log(p1); //{1, 2, true, "aaa", "bbb"}  返回一个Set对象，并且去重

const a = [1, 2, 3, 4, 5];
const b = a;
const c = [...a];
const p2 = new Set([a, b, c]);
// console.log(p2);

p1.add(6);
p1.delete('aaa');
const p3 = p1.entries(); //返回一个新的迭代器对象
// console.log(p3)

p1.forEach((i) => {
  // console.log(i)
})

const b1 = p1.has('bbb');
// console.log(b1)

const k1 = p1.keys(); //SetIterator {1, 2, true, "bbb", 6}  返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值
// console.log(k1)

const v1 = p1.values(); // SetIterator {1, 2, true, "bbb", 6}
// console.log(v1)

const o1 = {b: 2};

const p4 = new WeakSet([{a: 1}, o1]);
// console.log(p4.has(o1))
const p5 = new Set([{a: 1}]);
// console.log(p5)

export default function() {
  return (
    <div>
      <h1>Set</h1>
      <p>Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</p>
      <p>Set构造函数接受一个可迭代的参数，把这个参数不重复的添加到Set对象中去，并且返回该参数</p>
      <p>没有length属性，size属性返回set对象中值的个数</p>
    </div>
  );
}

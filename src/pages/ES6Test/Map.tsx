
import React from 'react';

import styles from './Map.css';

const p1 = new Map([[1, 2], [2, 2]])
// console.log(p1); // {1 => 2, 2 => 2}

const o1 = {a: 1};

const  p2 = new Map([[o1, 2], [o1, 3]]);
// console.log(p2) // {{a: 1} => 2}

// p2.clear() 移除Map对象的所有键/值对 。

// p2.delete({a: 1})
// console.log(p2)

const p3 = p2.entries();
// console.log(p3)

const p4 = p2.get(o1);
// console.log(p4) // 2

const p5 = p2.has(o1);
// console.log(p5) //2

console.log(p2.keys())

export default function() {
  return (
    <div>
      <p>Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。</p>
    </div>
  );
}

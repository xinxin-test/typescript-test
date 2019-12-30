
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Input } from 'antd';

import styles from './TestUseCallBack.css';


const set = new Set();
const useValues = () => {
  const [values, setValues] = useState({ data: {}, count: 0 });

  // const updateData = useCallback(
  //   (nextData) => {
  //     setValues({
  //       data: nextData,
  //       count: values.count + 1 // 因为 callback 内部依赖了外部的 values 变量，所以必须在依赖数组中指定它
  //     });
  //   },
  //   [values], 
  // );
  const updateData = useCallback((nextData) => {
    setValues((prevValues) => ({
      data: nextData,
      count: prevValues.count + 1, // 通过 setState 回调函数获取最新的 values 状态，这时 callback 不再依赖于外部的 values 变量了，因此依赖数组中不需要指定任何值
    }));
  }, []); // 这个 callback 永远不会重新创建

  set.add(updateData);

  return [values, updateData];
};

export default function () {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');
  const [values, updateData] = useValues();

  const callback = useCallback(() => {
    return count;
  }, [count]);
  // set.add(callback);

  return (
    <div className={styles.normal}>
      <h1>Page TestUseCallBack</h1>
      <h4>count: {count}</h4>
      <h4>set.size: {set.size}</h4>
      <h4>values: {values.count}</h4>
      <Child callback={callback} />
      <div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Input value={val} onChange={event => setVal(event.target.value)} />
        <Button onClick={() => updateData(count + 1)}>uuu</Button>
      </div>
      <ol style={{textAlign: 'left'}}>
        <li>依赖数组依赖的值最好不要超过 3 个，否则会导致代码会难以维护。</li>
        <li>如果发现依赖数组依赖的值过多，我们应该采取一些方法来减少它。
        <ul>
            <li>去掉不必要的依赖。</li>
            <li>将 Hook 拆分为更小的单元，每个 Hook 依赖于各自的依赖数组。</li>
            <li>通过合并相关的 state，将多个依赖值聚合为一个。</li>
            <li>通过 <code>setState</code> 回调函数获取最新的 state，以减少外部依赖。</li>
            <li>通过 <code>ref</code> 来读取可变变量的值，不过需要注意控制修改它的途径。</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

interface ChildProps {
  callback: () => any
}

function Child({ callback }: ChildProps) {
  const [count, setCount] = useState(() => callback());

  useEffect(() => {
    setCount(callback());
  }, [callback]);
  return (
    <div>
      Child Count: {count}
      <p>
        所有依赖本地状态或props来创建函数，需要使用到缓存函数的地方，都是useCallback的应用场景。
      </p>
    </div>
  )
}

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
b.toString(); //[object Object]
// 对象的键值会被自动转换为字符串，对象b，c会调用toString()方法，b.toString = [object Object]
// console.log(a[b]); // 456


import React, { useState, useMemo } from 'react';
import { Button, Input, Card } from 'antd';

import styles from './TestUseMemo.css';

function Memo() {
  const [count, setCount]  = useState(1);
  const [val, setValue] = useState('');

  const expensive = useMemo(() => {
    let sum = 0;
      for (let i = 0; i < count * 100; i++) {
        sum += i;
      }
    return sum;
  }, [count]);

  return (
    <div className={styles.normal}>
      <h4>{count}-{expensive}</h4>
      {val}
      <div>
        <Button onClick={() => { setCount(count + 1); setValue('120')}}>+c1</Button>
        <Input value={val} onChange={event => setValue(event.target.value)}/>
      </div>
      <p>
        useMemo在组件第一次渲染的时候执行，如果依赖变量发生改变会再次执行，返回缓存的变量
      </p>
      <p>
        useMemo本身也有开销。useMemo 会「记住」一些值，同时在后续 render 时，将依赖数组中的值取出来和上一次记录的值进行比较，如果不相等才会重新执行回调函数，否则直接返回「记住」的值。这个过程本身就会消耗一定的内存和计算资源。因此，过度使用 useMemo 可能会影响程序的性能。
      </p>
      <p>
        useMemo 适用的场景：
        1. 有些计算开销很大，我们就需要「记住」它的返回值，避免每次 render 都去重新计算。
        2. 由于值的引用发生变化，导致下游组件重新渲染，我们也需要「记住」这个值。
      </p>
      <Children val={val} />
    </div>
  );
}

interface ChildrenProps {
  val: string
}

function Children({val}: ChildrenProps) {
  const a = 1;
  const num = useMemo(() => {
    console.log('重新计算过了');
    let sum = 0;
    for (let i = 0; i < Number(val) * 10000; i++) {
      sum += i;
    }
    return {sum};
  }, [val]);

  return <Test num={num} />
}

interface TestProps {
  num: any
}

function Test(props: TestProps) {
  console.log(props)
  return (
    <Card title="Default size card" extra={<a href="#">More</a>}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

export default Memo;

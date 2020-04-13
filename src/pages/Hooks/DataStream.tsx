
import React, {useState, createContext, useContext, useReducer} from 'react';
import { createContainer } from "unstated-next";
import { Card, Button } from 'antd';
import styles from './DataStream.css';

const CountContext = createContext<any>({});

// 自定义数据管理 Hook
function useCounter() {
  const [state, setState] = useState<any>({a: 100, b: 200});
  return { ...state, setState };
}
const Counter = createContainer(useCounter);

function useCounterR(){
  const [state, dispatch] = useReducer(reducer, {a: 100, b: 200});

  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'add': 
        return {...state, a: state.a + 2};
      case 'dec':
        return {...state, a: state.a - 10};
      case 'double':
        return {...state, b: state.b * 2};
      case 'triple':
        return {...state, b: state.b * 3};
      default:
        return state;
    }
  }

  return { ...state, dispatch };
}

const CounterR = createContainer(useCounterR);

function DataStream() {
  let [count, setCount] = useState(1);

  function add() {
    setCount(++count);
  }

  return (
    <Card title="数据流测试">
      <p>count: {count}</p>
      <Button onClick={add}>+</Button>
      <CountContext.Provider value={{ count, setCount }}>
        问题是数据与 UI 不解耦
        <Child/>
      </CountContext.Provider>
      <Counter.Provider>
        <CounterDisplay />
      </Counter.Provider>
      <CounterR.Provider>
        <ViewR />
      </CounterR.Provider>
      <CounterR.Provider>
        <ViewR2 />
      </CounterR.Provider>
    </Card>
  )
}

function Child() {
  let { count, setCount } = useContext(CountContext);

  function add() {
    setCount(--count)
  }

  return (
    <Card title="createContext" style={{marginBottom: 20}}>
      <p>count:{count}</p>
      <Button onClick={add}>-</Button>
    </Card>
  )
}

function CounterDisplay() {
  let { a, b, setState } = Counter.useContainer();

  // useState 无法合并更新
  function changeA() {
    setState({a: a + 1});
  }

  function changeB(){
    setState({b: b + 1, a: a + 2});
  }

  return (
    <Card title="unstated-next">
      <p>a:{a}</p>
      <Button onClick={changeA}>加一</Button>
      <p>b:{b}</p>
      <Button onClick={changeB}>加2</Button>
    </Card>
  )
}

function ViewR() {
  let {a, dispatch} = CounterR.useContainer();

  // 实现useState合并更新

  return (
    <Card title="reducer">
      <p>a: {a}</p>
      <Button onClick={() => dispatch({type: 'add'})}>
        a + 1
      </Button>
    </Card>
  )
}

function ViewR2() {
  let {b, dispatch} = CounterR.useContainer();

  return (
    <Card title="reducer">
      <p>b:{b}</p>
      <Button onClick={() => dispatch({type: 'triple'})}>
        b乘以3
      </Button>
    </Card>
  )
}

export default DataStream;

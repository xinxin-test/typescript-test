import React, { Fragment } from 'react';

export default class Test extends React.PureComponent {
  wrappedInstance = {};

  someMethod = () => {
    console.log(this.wrappedInstance);
  }

  componentDidMount() {
    this.someMethod();
  }

  ref = React.createRef();

  render() {
    return (
      <Fragment>
        ref不能直接传给无状态组件
        <MyInput ref={(instance: any) => this.wrappedInstance = instance} />
        <MyInputStateLess ref={this.ref} />
      </Fragment>
    )
  }
};

interface InputProps {
  ref: any
}

function MyInputStateLess(props: InputProps) {
  return <input />
}

class MyInput extends React.PureComponent {
  render() {
    return <input />
  }
}

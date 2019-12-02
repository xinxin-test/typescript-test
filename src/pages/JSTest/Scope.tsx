
import React from 'react';

import styles from './Scope.css';

export default function() {
  return (
    <div className={styles.normal}>
      <p>
        LHS查询，变量出现在赋值操作的左手边，a = 1，找到a变量，并将它赋值为1
      </p>
      <p>
        RHS查询，变量出现早赋值操作的右手边，意味着去取值，console.log(a)取得变量a的值，单个的变量出现，和函数调用，都属于RHS查询
      </p>
      <p>作用域是当前执行的代码，如何通过标识付访问变量的规则，js采用词法作用域，词法作用域是词法分析时被定义的作用域，写程序的时候变量和块在何处被编写，</p>
      <br />
      <p>词法作用域关注函数是在哪里被定义的</p>
      <p>动态作用域关注函数是在哪里被调用的</p>
      <p>this关注函数是如何被调用的</p>
    </div>
  );
}


import React from 'react';
import styles from './TSTest.css';

const foo = {
  getName: (name: string) => {
    return `my name is ${name}!!!,lalala`;
  }
}

// let x = foo ?? '22';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page TSTest</h1>
      {/* {foo?.getName('xiaokeai')} */}
    </div>
  );
}

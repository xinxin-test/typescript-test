
import React from 'react';

import styles from './EX1.css';

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}
// 调用函数的时候，传入了更精确的函数参数类型
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
{/* listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y))); */}

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page EX1</h1>
    </div>
  );
}

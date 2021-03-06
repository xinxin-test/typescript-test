interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {

  return {
    color: config.color ? config.color : 'red',
    area: config.width ? config.width * config.width : 0
  }
}

// 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// 目标类型SquareConfig没有包含一个colour属性，因此会报错
// let mySquare1 = createSquare({ colour: "red", width: 100 });
// 使用类型断言绕开检查
let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig)

interface SquareConfig {
  color?: string;
  width?: number;
  // 添加一个字符串索引签名，这个对象可能具有某些作为特殊使用的额外属性
  // 但在这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。
  [propName: string]: any;
}

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { x: number; y: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
}
// 调用函数的时候，传入了更精确的函数参数类型
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
// 传入的函数的参数与期望的参数类型匹配，但是没有要使用的x和y属性，使用类型断言告诉编译器，参数的类型，因为要使用
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
// 类型断言一个函数
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));
// listenEvent(EventType.Mouse, (e: number) => console.log(e));

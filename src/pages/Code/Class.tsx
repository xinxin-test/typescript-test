
import React from 'react';

import styles from './Class.css';

// 用类描述一个对象或者实例
class Person {
  protected name: string;
  private surname: string;
  public email: string;
  public age: number = 10;
  sex: string = 'g';

  // 构造函数声明为protected，不能被实例化，但是能被继承
  // 如果构造函数被声明为private，构造函数就只能在类里面被访问，同时也不能被继承
  protected constructor(name: string, surname: string, email?: string) {
    this.name = name;
    this.surname = name;
    this.email = name;
  }
  greet() {
    alert("hi");
  }
}
class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name, 'pp');
    this.department = department;
  }
  public getElevatorPitch() {
    // 在子类的方法里可以访问父类的被protected保护的属性
    return `Hello, my name is ${this.name} and I work in ${this.department} & my surname is.`;
  }
}
// const me: Person = new Person('xinxin', 'xiaokeai', 'xinxin@qq.com')
// me.greet();
let howard = new Employee("Howard", "Sales");
howard.getElevatorPitch()
// console.log(howard.name);  不能在Person外部访问被protected保护的属性

// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`);
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log('Woof! Woof!');
//   }
// }

class Animal {
  name: string; // 默认是public类型
  // 如果其中一个类型里包含一个private成员，那么只有当另外一个类型中也存在这样一个private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
  private name2: string; // 标记成private时，它就不能在声明它的类的外部访问,也不能在子类中被访问
  constructor(theName: string) { this.name = theName; this.name2 = 'Lily' }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Animal2 {
  name: string; // 默认是public类型
  // 如果其中一个类型里包含一个private成员，那么只有当另外一个类型中也存在这样一个private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
  private name2: string; // 标记成private时，它就不能在声明它的类的外部访问
  constructor(theName: string) { this.name = theName; this.name2 = 'Lily' }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
// let a = new Animal('pp');
// let b = new Animal2('ss')
// a = b
class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters: number = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  // 在子类的构造函数里访问this的属性之前，我们一定要调用super()。 这个是TypeScript强制执行的一条重要规则。
  constructor(name: string) { super(name); }
  // 在子类里重写父类的方法
  move(distanceInMeters: number = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);

class Test {
  // 只读属性必须在声明时或构造函数里被初始化
  readonly name: string;
  readonly sex: string = 'pp';
  constructor(name: string) {
    this.name = name;
  }
}

let passcode = "secret passcode000";
class Empl {
  private _fullName: string = '';
  // 存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3
  // 只带有get不带有set的存取器自动被推断为readonly
  get fullname(): string {
    return this._fullName;
  }

  set fullname(newname: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newname;
    }
    else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

class Grid {
  // 静态成员属性存在于类本身上面而不是类的实例上
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) { }
}

// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
abstract class Department {
  constructor(public name: string) { }
  // 抽象类可以包含成员的实现细节
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  // 在抽象类内部定义抽象方法
  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}
let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department声明为抽象类型Department，不存在generateReports方法
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

export default function () {
  return (
    <div className={styles.normal}>
      <p>基本类型： boolean， number，string， array， void</p>
      <p>用户自定义的enum类型</p>
    </div>
  );
}

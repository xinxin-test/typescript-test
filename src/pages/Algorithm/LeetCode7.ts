// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

const n = 1563847412;

// 执行用时：124ms，消耗内存：36.2M
var reverse = function(x: number) {
  const left = Math.pow(-2, 31);
  const right = Math.pow(2, 31) - 1;
  const length = x > 0 ? x.toString().length : x.toString().length - 1;
  var result: number = 0;
  const a = 10;
  
  for(let i = 0; i < length; i++) {
    const y = x % a;
    x = (x - y)/a;
    result  = result * 10 + y;
  }
  return result >= left && result <= right ? result : 0;
};

const p = reverse(n);
console.log(p)

export default p;

import React from 'react';

export default function() {
  return (
    <div>
      <p>test</p>
    </div>
  );
}

function test(resolve, reject) {
  var timeOut = Math.random() * 2;
  setTimeout(function () {
    if (timeOut < 1) {
      // console.log('call resolve()...');
      resolve('200 OK');
    }
    else {
      console.log('call reject()...');
      // reject('timeout in ' + timeOut + ' seconds.');
    }
  }, timeOut * 1000);
}

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {});
// var p3 = p2.catch(function (reason) {});

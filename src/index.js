const add1 = (a, b, c) => {
  return a + b + c + 1;
};

const add2 = (b) => {
  return b + 2;
};

const add3 = (c) => {
  return c + 3;
};

const sum = function () {
  let args1 = [...arguments];
  args1 = args1.reverse();
  return function () {
    const args2 = [...arguments];
    let sum = 0;
    for (let i = 0; i < args1.length; i++) {
      sum += i === 0 ? args1[i](...args2) : args1[i](args2[i]);
    }
    return sum;
  };
};

console.log(sum(add3, add2, add1)(1, 2, 3));

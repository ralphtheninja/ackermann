# ackermann [![Build Status](https://travis-ci.org/ralphtheninja/ackermann.svg?branch=master)](https://travis-ci.org/ralphtheninja/ackermann)

The [Ackermann](https://en.wikipedia.org/wiki/Ackermann_function) function. Only for theoretical interest in non primitive recursion. Otherwise completely useless and will kill your program.

### Usage

```js
const A = require('ackermann')
console.log(A(3, 4)) // -> 125
```

For larger values of `m` or `n` you will run into `RangeError: Maximum call stack size exceeded` so you need to tell `v8` to use a larger stack size. This is done by setting the `--stack_size` v8 argument, which is specified in `kB`.

```
node --stack_size=100000 program.js
```

# License
MIT

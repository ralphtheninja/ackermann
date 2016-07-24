const assert = require('assert')

function A (m, n) {
  assert(m >= 0 && n >= 0)

  if (m === 0) {
    return n + 1
  } else {
    if (n === 0) {
      return A(m - 1, 1)
    } else {
      return A(m - 1, A(m, n - 1))
    }
  }
}

module.exports = A

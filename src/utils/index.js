/**
 * 防抖
 * @param {function} fn 触发的函数
 * @param {number} delay 多少秒后触发
 */
export function debounce(fn, delay = 500) {
  let time = null
  return function () {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn.apply(this, arguments)
      time = null
    }, delay)
  }
}

/**
 * 节流
 * @param {function} fn 触发的函数
 * @param {number} delay 多少秒内只触发一次
 */
export function throttle(fn, delay = 500) {
  let time = null
  return function () {
    if (time) {
      return
    }
    time = setTimeout(() => {
      fn.apply(this, arguments)
      time = null
    }, delay)
  }
}

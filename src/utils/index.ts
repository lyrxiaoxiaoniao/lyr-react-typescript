/**
 * Throttle
 * @param fn {func}
 * @param delay {number}
 */

export const Throttle = (fn: any, delay = 500) => {
    const self = fn
    const isFirst = false
    let timer: any = null

    return (...rest: any[]) => {
        if (!isFirst) {
            self(...rest)
        }

        if (timer) {
            return
        }

        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            self(...rest)
        }, delay)
    }
}

/**
 * 防抖函数
 * @param method 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export const debounce = (method: any, delay = 50) => {
    let timer: any = null
    return function() {
        const self: any = this
        const args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(function() {
            method.apply(self, args)
        }, delay)
    }
}

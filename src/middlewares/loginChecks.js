/**
 * @description 登录验证的中间件
 * @author 前端小菜鸟吖
 */

const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')

/**
  * API 登录验证
  * @param {Object} ctx ctx
  * @param {function} next next
  */
async function loginCheck(ctx, next) {
    if (ctx.session.userInfo) {
    // 已登录
        await next()
        return
    }
    // 未登录
    ctx.body = new ErrorModel(loginCheckFailInfo)
}

module.exports = {
    loginCheck,
}

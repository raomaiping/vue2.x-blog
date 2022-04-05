/**
 * @description user API 路由
 * @author 前端小菜鸟吖
 */

const router = require('koa-router')()
const { isExist, register, login, logout } = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
const { loginCheck } = require('../../middlewares/loginChecks')
const { SuccessModel } = require('../../model/ResModel')
router.prefix('/api/user')

// 注册路由
router.post('/register', genValidator(userValidate), async (ctx, next) => {
    const { username, email, password, gender } = ctx.request.body
    ctx.body = await register({ username, email, password, gender })
})
// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
    const { username } = ctx.request.body
    ctx.body = await isExist(username)
})

// 登录
router.post('/login', async (ctx, next) => {
    const { username, password } = ctx.request.body
    ctx.body = await login(ctx, username, password)
})

// 获取用户信息
router.get('/getUserInfo', loginCheck, async (ctx, next) => {
    ctx.body = new SuccessModel(ctx.session.userInfo)
})

// 退出登录
router.post('/logout', loginCheck, async (ctx, next) => {
    ctx.body = await logout(ctx)
})

module.exports = router

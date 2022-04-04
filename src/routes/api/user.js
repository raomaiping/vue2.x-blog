/**
 * @description user API 路由
 * @author 前端小菜鸟吖
 */

const router = require('koa-router')()
const { isExist, register, login } = require('../../controller/user')
const userValidate = require('../../validator/user')
const { genValidator } = require('../../middlewares/validator')
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
module.exports = router

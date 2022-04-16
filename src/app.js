const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const cors = require('koa2-cors')
const redisStore = require('koa-redis')
const { isProd } = require('./utils/env')
const { SESSION_SECRET_KEY } = require('./conf/secretKeys')
const { REDIS_CONF } = require('./conf/db')
const userAPIRouter = require('./routes/api/user')
const errorViewRouter = require('./routes/view/error')

app.use(
    cors({
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
        maxAge: 100,
        credentials: true,
        allowMethods: ['GET', 'POST', 'OPTIONS', 'PATCH'],
        allowHeaders: [
            'Content-Type',
            'Authorization',
            'Accept',
            'X-Custom-Header',
            'anonymous',
        ],
    })
) //允许跨域
// error handler
let onerrorConf = {}
if (isProd) {
    onerrorConf = {
        redirect: '/error',
    }
}

onerror(app, onerrorConf)

// middlewares
app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text'],
    })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(
    views(__dirname + '/views', {
        extension: 'ejs',
    })
)

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// session 配置
app.keys = [SESSION_SECRET_KEY]
app.use(
    session({
        key: 'blog.sid', // cookie name 默认是 `koa.id`
        prefix: 'blog:sess:', // redis key 的前缀，默认是`koa:sess`
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //ms
        },
        store: redisStore({
            all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
        }),
    })
)

// routes
app.use(userAPIRouter.routes(), userAPIRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods()) // 404路由注册到最下面
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

module.exports = app

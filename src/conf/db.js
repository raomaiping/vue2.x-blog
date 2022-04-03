/**
 * @description 存储配置
 * @author 前端小菜鸟吖
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1',
}

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '19980408abcd',
    port: '3306',
    database: 'blog_server',
}

if (isProd) {
    REDIS_CONF = {
    //线上的 redis 配置
        port: 6379,
        host: '127.0.0.1',
    }
    MYSQL_CONF = {
    //线上的 mysql 配置
        host: 'localhost',
        user: 'root',
        password: '19980408abcd',
        port: '3306',
        database: 'blog_server',
    }
}

module.exports = { REDIS_CONF, MYSQL_CONF }

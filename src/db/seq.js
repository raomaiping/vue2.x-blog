/**
 * @description sequelize 实例
 * @author 前端小菜鸟吖
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { host, password, user, database } = MYSQL_CONF
const { isProd, isTest } = require('../utils/env')
const conf = {
    host,
    dialect: 'mysql',
}

//线上环境使用连接池
if (isProd) {
    conf.pool = {
        max: 5, //连接池中最大连接数量
        min: 0, // 最小
        idle: 10000, //如果一个连接池 10s 之内没有占用则释放
    }
}

if (isTest) {
    //测试环境不打印sql语句
    conf.logging = () => {}
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq

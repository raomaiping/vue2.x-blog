/**
 * @description 用户数据模型
 * @author 前端小菜鸟吖
 */

const seq = require('../seq')
const { STRING, DECIMAL } = require('../types')
// users
const User = seq.define('user', {
    username: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '用户名，唯一',
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: '密码',
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment: '昵称',
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        defaultValue: 3,
        comment: '性别',
    },
    picture: {
        type: STRING,
        comment: '头像，图片地址',
    },
    city: {
        type: STRING,
        comment: '城市',
    },
    github: {
        type: STRING,
        comment: 'githb地址',
    },
    juejin: {
        type: STRING,
        comment: '掘金地址',
    },
    qq: {
        type: STRING,
        comment: 'qq号',
    },
    wx: {
        type: STRING,
        comment: '微信号',
    },
})

module.exports = User

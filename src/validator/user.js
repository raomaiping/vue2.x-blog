/**
 * @description user 数据格式校验
 * @author 前端小菜鸟吖
 */
const validate = require('./_validate')

// 校验规则
const SCHEMA = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            pattern: '^[a-zA-Z][a-zA-Z0-9_]+$', // 字母开头，字母数字下划线
            maxLength: 255,
            minLength: 2,
        },
        email: {
            type: 'string',
            pattern: '^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$', // 邮箱正则
            maxLength: 255,
        },
        password: {
            type: 'string',
            maxLength: 255,
            minLength: 3,
        },
        newPassword: {
            type: 'string',
            maxLength: 255,
            minLength: 3,
        },
        nickName: {
            type: 'string',
            maxLength: 255,
        },
        picture: {
            type: 'string',
            maxLength: 255,
        },
        city: {
            type: 'string',
            maxLength: 255,
            minLength: 2,
        },
        gender: {
            type: 'number',
            minimum: 1,
            maximum: 3,
        },
        github: {
            type: 'string',
            maxLength: 255,
        },
        juejin: {
            type: 'string',
            maxLength: 255,
        },
        qq: {
            type: 'string',
            maxLength: 255,
        },
        wx: {
            type: 'string',
            maxLength: 255,
        },
    },
}

/**
  * 校验用户数据格式
  * @param {Object} data 用户数据
  */
function userValidate(data = {}) {
    return validate(SCHEMA, data)
}

module.exports = userValidate

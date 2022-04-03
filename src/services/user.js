/**
 * @description user service
 * @author 前端小菜鸟吖
 */

const { User } = require('../db/model/index')
const { formatUser } = require('./_format')
/**
  * 获取用户信息
  * @param {string} username 用户名
  * @param {string} password 密码
  */
async function getUserInfo(username, password) {
    // 查询条件
    const whereOpt = {
        username,
    }
    if (password) {
        Object.assign(whereOpt, { password })
    }

    // 查询
    const result = await User.findOne({
        attributes: ['id', 'username', 'nickName', 'picture', 'city'],
        where: whereOpt,
    })
    if (result == null) {
    // 未找到
        return result
    }

    // 格式化
    const formatRes = formatUser(result.dataValues)

    return formatRes
}

/**
  * 创建用户
  * @param {string} username 用户名
  * @param {string} password 密码
  * @param {number} gender 性别
  * @param {string} nickName 昵称
  */
async function createUser({ username, password, gender = 3, nickName }) {
    const result = await User.create({
        username,
        password,
        gender,
        nickName: nickName ? nickName : username,
    })
    const data = result.dataValues
    return data
}

module.exports = {
    getUserInfo,
    createUser,
}

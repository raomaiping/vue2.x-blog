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
        attributes: [
            'id',
            'username',
            'nickName',
            'picture',
            'city',
            'email',
            'github',
            'juejin',
            'qq',
            'wx',
        ],
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
  * @param {string} email 邮箱
  * @param {string} password 密码
  * @param {number} gender 性别
  * @param {string} nickName 昵称
  */
async function createUser({ username, email, password, gender = 3, nickName }) {
    const result = await User.create({
        username,
        email,
        password,
        gender,
        nickName: nickName ? nickName : username,
    })
    const data = result.dataValues
    return data
}
/**
 * 更新用户信息
 * @param {Object} param0 要修改的内容 { newPassword, newEmail, newNickName, newGender, newPicture , newCity ,newGitHub, newJuejin, newQq, newWx}
 * @param {Object} param1 查询条件 { userName, password }
 */
async function updateUser(
    {
        newPassword,
        newEmail,
        newNickName,
        newGender,
        newPicture,
        newCity,
        newGitHub,
        newJuejin,
        newQq,
        newWx,
    },
    { username, password }
) {
    // 拼接修改内容
    const updateData = {}
    if (newPassword) {
        updateData.password = newPassword
    }
    if (newEmail) {
        updateData.email = newEmail
    }
    if (newNickName) {
        updateData.nickName = newNickName
    }
    if (newGender) {
        updateData.gender = newGender
    }
    if (newPicture) {
        updateData.picture = newPicture
    }
    if (newCity) {
        updateData.city = newCity
    }
    if (newGitHub) {
        updateData.github = newGitHub
    }
    if (newJuejin) {
        updateData.juejin = newJuejin
    }
    if (newQq) {
        updateData.qq = newQq
    }
    if (newWx) {
        updateData.wx = newWx
    }
    // 拼接查询条件
    const whereData = {
        username,
    }
    if (password) {
        whereData.password = password
    }
    // 执行修改
    const result = await User.update(updateData, {
        where: whereData,
    })
    return result[0] > 0 // 修改的行数
}

module.exports = {
    getUserInfo,
    createUser,
    updateUser,
}

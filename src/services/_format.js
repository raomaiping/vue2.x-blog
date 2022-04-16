/**
 * @description 数据格式化
 * @author 前端小菜鸟吖
 */

const { DEFAULT_PICTURE } = require('../conf/constant')
/**
   * 用户默认头像
   * @param {Object} obj 用户对象
   */
function _formatUserPicture(obj) {
    for (let key in obj) {
        if (obj[key] === null) {
            switch (key) {
            case 'picture':
                obj[key] = DEFAULT_PICTURE
                break
            default:
                obj[key] = ''
                break
            }
        }
        if (key === 'gender') {
            obj[key] = +obj[key]
        }
    }
    return obj
}

/**
   * 格式化用户信息
   * @param {Array|Object} list 用户列表或者单个用户对象
   */
function formatUser(list) {
    if (list == null) {
        return list
    }

    if (list instanceof Array) {
    // 数组 用户列表
        return list.map(_formatUserPicture)
    }

    // 单个对象
    return _formatUserPicture(list)
}

module.exports = {
    formatUser,
}

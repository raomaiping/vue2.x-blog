import request from '@/utils/request'

/**
 * 登录
 * @param {string} username 用户名
 * @param {string} password 密码
 */
export function login({ username, password }) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: { username, password },
  })
}

/**
 * 查询用户名是否存在
 * @param {string} username 用户名
 */
export function isExist({ username }) {
  return request({
    url: '/api/user/isExist ',
    method: 'post',
    data: { username },
  })
}

/**
 * 注册
 * @param {string} username 用户名
 * @param {string} email 邮箱
 * @param {string} password 密码
 * @param {number} gender 性别(1 男 ,2 女孩,3 保密)
 */
export function register({ username, email, password, gender }) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: { username, email, password, gender },
  })
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return request({
    url: '/api/user/getUserInfo',
    method: 'get',
  })
}

/**
 * 更新用户信息
 * @param {string} email 邮箱 (必填)
 * @param {string} nickName 昵称 (必填)
 * @param {number} gender 性别(1 男 ,2 女孩,3 保密)
 * @param {string} picture 图片地址
 * @param {string} city 城市
 * @param {string} github GitHb
 * @param {string} juejin 掘金地址
 * @param {string} qq QQ账号
 * @param {string} wx 微信账号
 */
export function changeInfo({
  email,
  nickName,
  gender,
  picture,
  city,
  github,
  juejin,
  qq,
  wx,
}) {
  return request({
    url: '/api/user/changeInfo',
    method: 'patch',
    data: {
      email,
      nickName,
      gender,
      picture,
      city,
      github,
      juejin,
      qq,
      wx,
    },
  })
}

/**
 * 修改密码
 * @param {string} password 密码 (必填)
 * @param {string} newPassword 新的密码 (必填)
 */
 export function changePassword({
  password,
  newPassword,
}) {
  return request({
    url: '/api/user/changePassword',
    method: 'patch',
    data: {
      password,
      newPassword,
    },
  })
}


/**
 *
 * 退出登录
 */
export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post',
  })
}

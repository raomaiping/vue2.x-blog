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
 *
 * 退出登录
 */
export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post',
  })
}

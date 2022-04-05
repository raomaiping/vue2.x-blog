import { Message } from 'element-ui'
import {
  NOT_USER_NAME,
  NOT_EMAIL,
  NOT_PASSWORD,
  ERROR_USER_NAME,
  ERROR_EMAIL,
} from '@/config/constant'
function errorMessage(message, duration = 5 * 1000) {
  Message({
    message,
    type: 'error',
    duration,
  })
}
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]+$/
const emailRegex =
  /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/

/**
 * 校验注册表单
 * @param {object} form  username, password, email
 */
export function validatorRegisterForm({ username, password, email }) {
  if (!username) {
    errorMessage(NOT_USER_NAME)
    return false
  }
  if (!email) {
    errorMessage(NOT_EMAIL)
    return false
  }
  if (!password) {
    errorMessage(NOT_PASSWORD)
    return false
  }
  if (!usernameRegex.test(username)) {
    errorMessage(ERROR_USER_NAME)
    return false
  }
  if (!emailRegex.test(email)) {
    errorMessage(ERROR_EMAIL)
    return false
  }
  return true
}
/**
 * 校验登录表单
 * @param {object} form  username, password
 */
export function validatorLoginForm({ username, password }) {
  if (!username) {
    errorMessage(NOT_USER_NAME)
    return false
  }
  if (!password) {
    errorMessage(NOT_PASSWORD)
    return false
  }
  if (!usernameRegex.test(username)) {
    errorMessage(ERROR_USER_NAME)
    return false
  }
  return true
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

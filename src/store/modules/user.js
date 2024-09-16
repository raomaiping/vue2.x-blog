import { getUserInfo, logout, login, changeInfo } from '@/api/user'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    userInfo: {}, // 用户信息
    isLogin: false, // 是否登录
    isShowPersonalDetails: false, // 是否显示个人信息对话框
    isShowUpdatePassword:false, //是否显示修改密码
  }
}
const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_IS_LOGIN: (state, isLogin) => {
    state.isLogin = isLogin
  },
  SET_IS_SHOW_PERSONAL_DETAILS: (state, isShowPersonalDetails) => {
    state.isShowPersonalDetails = isShowPersonalDetails
  },
  SET_IS_SHOW_UPDATE_PASSWORD: (state, isShowUpdatePassword)=>{
    state.isShowUpdatePassword = isShowUpdatePassword
  },
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { errno, message, data } = response
          if (errno !== 0) {
            reject(message)
          }
          commit('SET_USER_INFO', data)
          commit('SET_IS_LOGIN', true)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // 获取用户信息
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((response) => {
          const { data } = response
          if (!data) {
            return reject('验证失败，请重新登录。')
          }
          commit('SET_USER_INFO', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 更新用户信息
  updateUserInfo({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      changeInfo(userInfo)
        .then((response) => {
          const {errno, data, message} = response
          if(errno === 0){
            commit('SET_USER_INFO', data)
            resolve()
          }
          reject(message)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 退出登录
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          commit('SET_IS_LOGIN', false)
          resetRouter()
          commit('RESET_STATE')
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 重置登录状态
  resetLoginState({ commit }) {
    return new Promise((resolve) => {
      commit('SET_IS_LOGIN', false)
      commit('RESET_STATE')
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

import { getUserInfo, logout } from '@/api/user'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    userInfo: null,
    isLogin: false,
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
}

const actions = {
  // 获取用户信息
  getUserInfo({ commit, state }) {
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
  // 退出登录
  logout({ commit, state }) {
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

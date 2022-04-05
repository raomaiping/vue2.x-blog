const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  isLogin: (state) => state.user.isLogin,
  userInfo: (state) => state.user.userInfo,
  avatar: (state) => state.user.userInfo?.avatar || '',
}
export default getters

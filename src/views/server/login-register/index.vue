<template>
  <div class="login-register" v-loading.fullscreen.lock="loading">
    <div :class="['container', { 'right-panel-active': !isLogin }]">
      <!-- 注册 -->
      <div class="container_form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form_title">注册</h2>
          <input
            type="text"
            placeholder="用户名"
            class="input"
            v-model="registerForm.username"
            @input="handleIsExist"
          />
          <input
            placeholder="邮箱"
            class="input"
            v-model="registerForm.email"
          />
          <input
            type="password"
            placeholder="密码"
            class="input"
            v-model="registerForm.password"
          />
          <button class="btn" @click.prevent="handleRegister">注册</button>
        </form>
      </div>

      <!-- 登录 -->
      <div class="container_form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form_title">登录</h2>
          <input
            placeholder="用户名"
            class="input"
            v-model="loginForm.username"
          />
          <input
            type="password"
            placeholder="密码"
            class="input"
            v-model="loginForm.password"
          />
          <a href="#" class="link">忘记密码?</a>
          <button class="btn" @click.prevent="handleLogin">登录</button>
        </form>
      </div>

      <!-- 浮层 -->
      <div class="container_overlay">
        <div class="overlay">
          <div class="overlay_panel overlay--left">
            <button class="btn" id="signIn" @click="goLogin">登录</button>
          </div>
          <div class="overlay_panel overlay--right">
            <button class="btn" id="signUp" @click="isLogin = false">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 背景 -->
    <div class="slidershow">
      <div
        class="slidershow--image"
        v-for="(imgSrc, index) in imgList"
        :key="index"
        :style="`background-image: url(${imgSrc})`"
      ></div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils'
import { isExist, register } from '@/api/user'
import { validatorRegisterForm, validatorLoginForm } from '@/utils/validate'
import {
  EXIST_USER_NAME,
  SUCCESS_LOGIN,
  SUCCESS_REGISTER,
} from '@/config/constant'
export default {
  name: 'LoginRegister',
  data() {
    return {
      imgList: [
        require('@/assets/login/login1.png'),
        require('@/assets/login/login2.png'),
        require('@/assets/login/login3.png'),
        require('@/assets/login/login4.png'),
      ],
      isLogin: true,
      loginForm: {
        username: '',
        password: '',
      },
      registerForm: {
        username: '',
        password: '',
        email: '',
      },
      debouncedCallback: null,
      redirect: undefined,
      loading: false,
    }
  },
  created() {
    this.debouncedCallback = debounce(async () => {
      const { username } = this.registerForm
      const { errno } = await isExist({ username })
      if (errno === 0) {
        this.$message.error(EXIST_USER_NAME)
        Object.assign(
          this.$data.registerForm,
          this.$options.data().registerForm
        )
      }
    }, 500)
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  methods: {
    // 校验用户名是否存在
    handleIsExist() {
      this.debouncedCallback()
    },
    // 注册
    async handleRegister() {
      if (!validatorRegisterForm(this.registerForm)) return
      const { errno, message } = await register(this.registerForm)
      if (errno !== 0) {
        this.$message.error(message)
        return
      }
      this.$message.success(SUCCESS_REGISTER)
      this.isLogin = true
    },
    // 登录
    async handleLogin() {
      if (!validatorLoginForm(this.loginForm)) return
      this.loading = true
      this.$store
        .dispatch('user/login', this.loginForm)
        .then(() => {
          this.$message.success(SUCCESS_LOGIN)
          this.$router.push({ name: 'Main' })
        })
        .catch((error) => {
          Object.assign(this.$data.loginForm, this.$options.data().loginForm)
          this.loading = false
          this.$message.error(error)
        })
    },
    goLogin() {
      this.isLogin = true
      Object.assign(this.$data.loginForm, this.$options.data().loginForm)
    },
    goRegister() {
      this.isLogin = false
      Object.assign(this.$data.registerForm, this.$options.data().registerForm)
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('./index.css');
</style>

<template>
  <el-dialog
    title="修改密码"
    :visible="isShowUpdatePassword"
    @close="handlerClose"
  >
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item
        label="旧密码"
        :label-width="formLabelWidth"
        prop="password"
      >
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="新密码"
        :label-width="formLabelWidth"
        prop="newPassword"
      >
        <el-input v-model="form.newPassword" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClose">取 消</el-button>
      <el-button type="primary" @click="handlerConfirm('form')">修改</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { changePassword } from '@/api/user'
import {
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERROR,
} from '@/config/constant'
export default {
  name: 'UpdatePassword',
  data() {
    return {
      formLabelWidth: '120px',
      form: {
        password: '',
        newPassword: '',
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            message: '密码的长度至少为3位',
            trigger: 'blur',
          },
        ],
        newPassword: [
          { required: true, message: '请输入新的密码', trigger: 'blur' },
          {
            min: 3,
            message: '新的密码的长度至少为3位',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters(['isShowUpdatePassword']),
  },
  methods: {
    handlerClose() {
      this.$store.commit('user/SET_IS_SHOW_UPDATE_PASSWORD', false)
    },
    handlerConfirm(form) {
      this.$refs[form].validate(async (valid) => {
        if (valid) {
          try {
            const { errno } = await changePassword(this.form)
            this.$store.commit('user/SET_IS_SHOW_UPDATE_PASSWORD', false)
            if (errno != 0) {
              this.$message.error(UPDATE_PASSWORD_ERROR)
              return
            }
            this.$message.success(UPDATE_PASSWORD_SUCCESS)
          } catch (error) {
            this.$message.error(UPDATE_PASSWORD_ERROR)
            this.$store.commit('user/SET_IS_SHOW_UPDATE_PASSWORD', false)
            console.log(error)
          }
        }
      })
    },
  },
  watch: {
    isShowUpdatePassword(val) {
      if (val) {
        this.form = {}
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>

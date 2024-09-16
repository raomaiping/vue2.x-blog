<template>
  <el-dialog
    title="个人信息"
    :visible="isShowPersonalDetails"
    @close="handlerClose"
  >
    <el-form :model="userInfoForm" :rules="rules" ref="userInfoForm">
      <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickName">
        <el-input v-model="userInfoForm.nickName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="userInfoForm.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="城市" :label-width="formLabelWidth" prop="city">
        <el-input v-model="userInfoForm.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-radio v-model="userInfoForm.gender" :label="1">男</el-radio>
        <el-radio v-model="userInfoForm.gender" :label="2">女</el-radio>
        <el-radio v-model="userInfoForm.gender" :label="3">保密</el-radio>
      </el-form-item>
      <el-form-item label="GitHb" :label-width="formLabelWidth">
        <el-input v-model="userInfoForm.github" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="掘金" :label-width="formLabelWidth">
        <el-input v-model="userInfoForm.juejin" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="QQ" :label-width="formLabelWidth">
        <el-input v-model="userInfoForm.qq" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="WX" :label-width="formLabelWidth">
        <el-input v-model="userInfoForm.wx" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClose">取 消</el-button>
      <el-button type="primary" @click="handlerConfirm('userInfoForm')"
        >修改</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_ERROR,
} from '@/config/constant'
export default {
  name: 'PersonalDetails',
  data() {
    return {
      formLabelWidth: '120px',
      userInfoForm: {},
      rules: {
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          {
            min: 3,
            max: 15,
            message: '长度在 3 到 15 个字符',
            trigger: 'blur',
          },
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ],
        city: [
          { required: true, message: '请输入城市', trigger: 'blur' },
          {
            min: 2,
            message: '城市名至少输入2个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters(['isShowPersonalDetails', 'userInfo']),
  },
  methods: {
    handlerClose() {
      this.$store.commit('user/SET_IS_SHOW_PERSONAL_DETAILS', false)
    },
    handlerConfirm(userInfoForm) {
      this.$refs[userInfoForm].validate((valid) => {
        if (valid) {
          this.$store
            .dispatch('user/updateUserInfo', this.userInfoForm)
            .then(() => {
              this.$message.success(UPDATE_USER_INFO_SUCCESS)
              this.$store.commit('user/SET_IS_SHOW_PERSONAL_DETAILS', false)
            })
            .catch((error) => {
              this.$message.error(UPDATE_USER_INFO_ERROR)
              console.log(error)
            })
        }
      })
    },
  },
  watch: {
    isShowPersonalDetails: {
      handler(val) {
        if (val) {
          this.userInfoForm = { ...this.userInfo }
        }
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>

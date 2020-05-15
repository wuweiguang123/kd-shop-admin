<template>
    <div class="login-container">
        <div class="login-box">
            <div class="login-header">
                <img src="../assets/images/user.png" alt="">
            </div>

            <div class="login-form">
                <el-form :model="userForm" :rules="rules" ref="loginForm">
                    <el-form-item prop="userName">
                        <el-input
                            prefix-icon="el-icon-user"
                            placeholder="请输入用户名"
                            v-model="userForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password"
                            prefix-icon="el-icon-key"
                            placeholder="请输入密码"
                            v-model="userForm.password"></el-input>
                    </el-form-item>
                    <el-form-item class="form-btns">
                        <el-button type="primary" @click="doLogin('loginForm')">登录</el-button>
                        <el-button type="info" @click="resetForm('loginForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '用户名长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    doLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('user/login', this.userForm).then(response => {
            console.log(response)
            this.$message({
              message: response.data.message,
              type: 'success'
            })
            // token只在网站打开期间生效，所以将token保存在sessionStorage中
            window.sessionStorage.setItem('token', response.data.token)
            // 通过编程式路由导航跳转到后台主页，路由地址是home
            this.$router.push('/home')
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
    background-color: #2b4b6b;
    height: 100%;
}
.login-box {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
}
.login-header {
    position: absolute;
    top: -20%;
    left: 35%;
}
.login-header img {
    border: 1px solid rgba(221, 218, 215, 0.23);
    border-radius: 50%;
    width: 120px;
}
.login-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box
}
.form-btns {
    text-align: right;
}
</style>

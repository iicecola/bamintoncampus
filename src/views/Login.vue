<template>
  <div class="login">
    <div class="login-cover">
      <div class="login-form">
        <form action="#home">
          <h2 style="text-align:center;font-size: 30px;color:skyblue">登&nbsp;&nbsp;&nbsp;录</h2>
          <hr>
          <div class="login-input">
            <label style="margin-left:30px" for="useraccount">账号:</label>
            <el-input 
              id="useraccount"
              v-model.trim="userAccount" 
              style="width:300px;margin-left:20px;margin-bottom:30px;" 
              size="medium " 
              type="text" >
            </el-input><br>

            <label style="margin-left:30px" for="password">密码:</label>
            <el-input 
              id="password"
              v-model="userPassword" 
              style="width:300px;margin-left:20px;margin-bottom:20px;" 
              size="medium " 
              type="text" >
            </el-input><br>

            <el-button
              @click="login"
              style="width:100px;height: 40px;margin: 20px 0 5px 0" 
              type="primary" plain>
            登录</el-button><br>
            <span class="login-to-register">没有账号？
              <a style="cursor:pointer;color:blue;text-decoration: underline;"
              @click="$router.push('/register')">
              注册一个</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//导入信息提示插件
import { Message } from 'element-ui'

export default {
    name:'Login',
    data(){
      return {
        userAccount: '',
        userPassword: ''
      }
    },
    methods:{
      login(){
        const localAccount = localStorage.getItem('userAccount')
        const localPassword = localStorage.getItem('userPassword')
        if(localAccount === this.userAccount && localPassword === this.userPassword){
          Message({
            message: '登录成功',
            type:'success',
            showClose: true,
          })
          this.$router.push('/home')
        }else{
          Message({
            message: '账号或密码错误',
            type:'error',
            showClose: true,
          })
        }
      }
    }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 738px;
    background-image: url('@/assets/login-background.png');
    background-size: cover;
  }

  .login-cover {
    position: fixed;
    top:0;left:0;right:0;bottom:0;
    background-color: rgba(0,0,0,0.5)
  }

  .login-form {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 500px;
    height: 350px;
    background-color: #f7f5f5;
    border-radius: 30px
  }

  .login-input {
    margin-top: 40px;
    text-align: center;
  }

  .login-to-register {
    font-size: 10px;
  }
</style>
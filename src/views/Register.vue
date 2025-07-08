<template>
  <div class="register">
    <div class="register-cover">
      <div class="register-form">
        <form action="#home">
          <h2 style="text-align:center;font-size: 30px;color:skyblue">注&nbsp;&nbsp;&nbsp;册</h2>
          <hr>
          <div class="register-input">
            <label style="margin-left:30px" for="useraccount">账号:</label>
            <el-input 
              id="useraccount"
              v-model.trim="userAccount" 
              style="width:300px;margin-left:50px;margin-bottom:30px;" 
              size="medium " 
              type="text" 
              placeholder="请输入账号">
            </el-input><br>

            <label style="margin-left:30px" for="password">密码:</label>
            <el-input 
              id="password"
              v-model="userPassword" 
              style="width:300px;margin-left:50px;margin-bottom:30px;" 
              size="medium " 
              type="text" 
              placeholder="请输入密码">
            </el-input><br>

            <label style="margin-left:30px" for="repassword">确认密码:</label>
            <el-input 
              id="repassword"
              v-model="userRepassword" 
              style="width:300px;margin-left:20px;margin-bottom:30px;" 
              size="medium " 
              type="text" 
              placeholder="再次输入密码">
            </el-input><br>

            <label style="margin-left:30px" for="nickname">昵称:</label>
            <el-input 
              id="nickname"
              v-model.trim="userNickname" 
              style="width:300px;margin-left:50px;margin-bottom:30px;" 
              size="medium " 
              type="text" 
              placeholder="请输入昵称">
            </el-input><br>

            <el-checkbox v-model="userAgreement">我已阅读并同意《用户协议》</el-checkbox><br>
            <el-button
              @click="register"
              style="width:100px;height: 40px;margin-top: 20px" 
              type="primary" plain>
            注册</el-button>
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
    name:'Register',
    data(){
        return {
          userAccount: '',
          userPassword:'',
          userRepassword:'',
          userNickname:'',
          userAgreement:false
        }
    },
    methods:{
      register(){
        if(this.userAccount === '' || this.userPassword === ''){
          return Message({
            message:'账号或密码不能为空',
            type:'error',
            showClose:true
          })
        }else if(this.userPassword !== this.userRepassword){
          return Message({
            message:'两次密码输入不一致',
            type:'error',
            showClose:true
          })
        }else if(this.userNickname === ''){
          return Message({
            message:'昵称不能为空',
            type:'warning',
            showClose:true
          })
        }else if(!this.userAgreement){
          return Message({
            message:'请阅读并同意用户协议',
            type:'warning',
            showClose:true
          })
        }else{
          Message({
            message:'注册成功',
            type:'success',
            showClose:true
          })

          //保存用户信息到本地
          localStorage.setItem('userAccount',this.userAccount)
          localStorage.setItem('userPassword',this.userPassword)
          localStorage.setItem('userNickname',this.userNickname)

          //通过vuex传递用户信息
          this.$store.commit('userInfo/LOGIN',[this.userAccount,this.userPassword,this.userNickname])
          this.$router.push('/login')
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

  .register {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 738px;
    background-image: url('@/assets/register-background.png');
    background-size: cover;
  }

  .register-cover {
    position: fixed;
    top:0;left:0;right:0;bottom:0;
    background-color: rgba(0,0,0,0.5)
  }

  .register-form {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 600px;
    background-color: #f7f5f5;
    border-radius: 30px
  }

  .register-input {
    padding-top: 50px;
    text-align: center;
  }
</style>
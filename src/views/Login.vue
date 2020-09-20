<template>
  <div class="home">
    <div class="star"> <i class="el-icon-star-off"></i></div>

    <!-- <div class="all">
      <div class="label" >账号：</div>
      <input v-model="username" placeholder="请输入账号" />
      <div class="label">密码：</div>
      <input v-model="password" type="password" placeholder="请输入密码" />
      <button id="loginBtn"@click="getHomeLogin( username, password)">登录</button>
    </div> -->
    <div class="all">
      <div class="label" >用户名：</div>
      <el-input placeholder="请输入用户名" v-model="username"></el-input>
      <div class="label">密码：</div>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <el-button @click="getHomeLogin">登录</el-button>
    </div>
  </div>
</template>
<script>
import { getHomeLogin } from "@/api/login.js"
  export default {
    name: 'Login',
    data () {
      return {
        username:'',
        password:''
      }
    },
    components: {

    },
    methods: {
      async getHomeLogin() {
        let res = await getHomeLogin({ 
          username: this.username,
          password: this.password
        })
      
        let { result, message, data } = res.data
        if (result) {
          this.$message({
            showClose: true,
            message: message,
            type: 'success'
          });
          sessionStorage.setItem("nickname", data.nickname)
          sessionStorage.setItem("token", data.token)
          setTimeout(() => {
            this.$router.push('/home/navpicture');
          }, 1000)
        } else {
          this.$message({
            showClose: true,
            message: message,
            type: 'error'
          });
        }     
      }
        

      }
    }
   
  
</script>
<style scoped>
  .star {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    font-size: 100px;
    color: var(--color-tint);
  }

  .all {
    margin: 100px auto;
    width: 360px;
  }

  .all .label {
    font-size: 16px;
    padding: 5px 0;
  }

  .all input {
    display: block;
    padding-left: 3px;
    width: 100%;
    height: 38px;
    margin: 10px 0;
    font-size: 16px;
    line-height: 1;
    color: #495057;
    background-color:#ccc;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 5px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    box-sizing: border-box;

    /*外边框*/
    outline: 1px solid blue;
  }

  .all button {
    display: line-block;
    margin-top: 20px;
    width: 100%;
    height: 38px;
    line-height: 16px;
    border-radius: 5px;
    background-color: var(--color-tint);
    border-color:  var(--color-tint);
    border: 1px solid transparent;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #fff;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;
  }
  .all button:hover {
    background-color:hotpink;
    border-color: hotpink;
  }
</style>
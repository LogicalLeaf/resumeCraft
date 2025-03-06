<script setup>

import {useRouter}from 'vue-router';
import {useUserInfoStore} from'@/stores/userInfo'
import {ref} from 'vue'
import {showToast} from 'vant'
const router=useRouter();
const name= ref('')
const password= ref('')

const handleLogin  =()=>{
    if(name.value===useUserInfoStore().adminName && password.value===useUserInfoStore().adminPassword){ 
       
        showToast({ type:"success", message: "登录成功!" ,style:{color:'grey', backgroundColor: 'rgba(255, 255, 255,0.7)'}}); 
       setTimeout(() => {
        router.push('./collectInfo');
       }, 1000);

   
    }  else{

    showToast({ type:"fail", message: "登陆失败! 账号或密码错误",style:{color:'tomato', backgroundColor: 'rgba(255, 255, 255,0.7)'}});

}
}

</script>
<template>
    
        <div id="container">
       <div id="login">
        <div id="loginInfo">
          <img>
          <h2 class="welcomeText">Welcome to Login</h2>
          <input class="username" type="text" placeholder="请输入账号" v-model="name">
          <input class="userpassword" type="password" placeholder="请输入密码" v-model="password"   >
          <button class="loginBtn" @click="handleLogin">Login</button>
        </div>
       
       </div>
 
    </div>
   
    
    
</template>
<style>
@media (max-width: 768px) {
    .container {
        flex-direction: column; /* 在小屏幕上垂直排列 */
    }
}

        
        #container{
        /* width: 1274px;
           height: 1122px;  */
           height:100vh;
            width:100vw;
            display: flex;
           justify-content: center;
           align-items: center;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-size:cover;
            position: fixed;
           
            background-image:url('../imgs/背景图片.jpg')
          
        }
        .welcomeText{
            font-size:30px;
            font-weight: bold;
            color:grey;
            margin-top:100px;
        }
        #login{
            width: 50%;
            height:90%;
            background-color: white;
            display: flex;
           flex-direction:column;
           align-items: center;
           border-radius: 20px;
           opacity:0.5;    
           
        }
        #loginInfo{
           
           display:flex;
           flex-direction:column;
           align-content: center;
           justify-content:center;
        }
        .username{
            margin-top:100px;
            height:60px;
            border-radius:20px;
           border: 1px solid grey;
           
              padding-left:20px;
            
            

        }
         .userpassword{
            margin-top:100px; height:60px;
            border-radius:20px;
            border: 1px solid grey;
            padding-left:20px;
        }
        .loginBtn{
            margin-top:100px;
            border-radius:20px;
            height:50px;
            border:none;
        }

    </style>
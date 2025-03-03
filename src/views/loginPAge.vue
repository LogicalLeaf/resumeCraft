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
        router.push('./collectInfo');
    showToast({ type:"success", message: "Login success!" ,style:{color:'black'}});
    }  else{

    showToast({ type:"fail", message: "Login failed!" });

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
        
        #container{
            width: 1274px;
           height: 1122px; 
            display: flex;
           justify-content: center;
           align-items: center;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-size:cover;
            position: fixed;
           
          
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
            background-color: aliceblue;
            display: flex;
           flex-direction:column;
           align-items: center;
           border-radius: 20px;
           
        }
        #loginInfo{
           
           display:flex;
           flex-direction:column;
           align-content: center;
           justify-content:center;
        }
        .username{
            margin-top:100px;
            height:50px;border-radius:20px;

        }
         .userpassword{
            margin-top:100px; height:50px;border-radius:20px;
        }
        .loginBtn{
            margin-top:100px;border-radius:20px;
        }

    </style>
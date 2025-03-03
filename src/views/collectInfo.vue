<script setup>
import 'vant/lib/index.css';
import{showToast} from'vant';
import { ref } from 'vue'
import { useResumeInfoStore } from '../stores/resumeInfo'

const store = useResumeInfoStore()
const name = ref('')

const updateName = (value) => {
  store.updateFormData('name', value)
}
 

const exitLog = () => {
showToast({ type: 'text', message: 'Logged out successfully' });
    console.log('logged out');
    setTimeout(() => {
        window.location.href = '/';
    },500);
}
const resumeGenerate=()=>{
     window.location.href = '/collectInfo/resumeGenerate';
}


const result = ref('');
const showPicker = ref(false);
const onConfirm =({selectedValues})=>{
    result.value=selectedValues.join('/');
    showPicker.value=false;
}
</script>

<template>
     <div id="container">
        <div id="footer">
    <van-button type="default" @click="exitLog" class="exitBtn">退出登录</van-button>
    <h1 class="title">信息收集</h1>
        </div>
    <div id="content">
        <div class="content-left">  <van-cell-group inset>
  <van-field
    v-model="name"
    label="姓名"
    required
    @update:model-value="updateName"
  />
  <div style="margin-left:15px; margin-top:5px;">
    <p>请选择性别</p>
    <input type="radio" id="male" name="gender" value="male" required >
<label for="male" >男</label><br>
<input type="radio" id="female" name="gender" value="female">
<label for="female">女</label><br>
</div>
<van-field
  v-model="result"
  is-link
  readonly
  name="datePicker"
  label="出生日期选择"
  placeholder="点击选择日期"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
</van-popup>
<div><p  style="margin-top:10px;margin-left:15px;;">请选择最高学历</p>
<select id="education" style="margin-top:10px;margin-left:15px;color:grey;">
    <option value="大专">大专</option>
    <option value="本科">本科</option>
    <option value="研究生">研究生</option>
    <option value="博士">博士</option>
</select>
</div>
<div>
     <van-field label="专业"   />
      <van-field label="民族"   />
       <van-field label="学校"  />
       <div><p  style="margin-top:10px;margin-left:15px;;">请选择政治面貌</p>
<select id="education" style="margin-top:10px;margin-left:15px;color:grey;">
    <option value="中共党员">中共党员</option>
    <option value="群众">群众</option>
    <option value="共青团员">共青团员</option>
    <option value="预备党员">预备党员</option>
   
</select>
</div>
          <van-field label="籍贯"   />

           <van-field label="邮箱"  />
           <van-field label="微信" />
           <van-field label="手机"   />
           <van-cell-group inset>
  
</van-cell-group>

           
</div>
</van-cell-group>

  <van-button type="default" @click="resumeGenerate" class="submitBtn">提交信息</van-button>
</div>
        <div class="content-right">
            <div style="width: 70%;margin-left:-350px;"> 
     <van-field  rows="5"  autosize  label="校园经历" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"/>
     <van-field  rows="5"  autosize  label="项目经历" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"/>
     <van-field  rows="5"  autosize  label="专业技能" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"/>
    <van-field  rows="5"  autosize  label="自我评价" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"/>
</div>
        </div>
       
   </div>
 </div>
</template>
<style scoped>
.submitBtn{
  color:brown;
}
.exitBtn{
    margin-left:50px;
}
.title{
    color:white;
    font-weight:bold;
    margin-left:500px;
    font-size:50px;
}
#container{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
  width: 1738px;
height: 1099px; 
}
#footer{
    display:flex;
    
    align-items:center;
    background-color: rgb(200, 219, 219);
    width:100%;
    height:100px;


}

#content{
    display:flex;
   
    align-items:center;
    justify-content:center;
    background-color:rgb(233, 233, 196);
 width:100%;
 height:90%;
}
.content-left {
    display:flex;
    flex-direction:column;
    width:50%;
    height:100%;
    background-color: aliceblue;
    margin-top:50px;
   align-items:center;

}
.content-right {
    background-color: beige;
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
    

}
</style>
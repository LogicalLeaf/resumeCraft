<script setup>
import 'vant/lib/index.css';
import{showToast} from'vant';
import { ref } from 'vue'
import { useResumeInfoStore } from '../stores/resumeInfo.js'

const store = useResumeInfoStore()


const updateField = (field, value) => {
  store.updateFormData(field, value); // 动态更新状态
  console.log(`Updated ${field}:`, value);
};



updateField({
  name: '',
  gender: '',
  birthDate: '',
  highestEducation: '',
  major: '',
  nation: '',
  colleage: '',
  hometown: '',
  email: '',
  wechat: '',
  phone: '',
   schoolExperiences: '',
      projectExperiences: '',
      selfEvaluation: '',
      professionalSkills: '',
});

const exitLog = () => {
showToast({ type: 'text', message: '退出登录成功' ,
  style: { color: 'tomato',
    backgroundColor: 'rgba(255, 255, 255, 0.9)' ,  }
});
    console.log('logged out');
    setTimeout(() => {
        window.location.href = '/';
    },500);
}
const submitInfo=()=>{
  showToast({ type: 'text', message: '提交成功！' ,
  style: { color: 'black',
    backgroundColor: 'rgba(255, 0.9)' }})
    setTimeout(() => {
     window.location.href = '/collectInfo/resumeGenerate';
},1000);
}

    


const result = ref('');
const showPicker = ref(false);
const onConfirm =({selectedValues})=>{
    const birthDate = selectedValues.join('/');
  result.value = birthDate; // 更新当前页面显示的值
  showPicker.value = false;

  // 将出生日期存入 Pinia 仓库
  store.updateFormData('birthDate', birthDate);
}
</script>

<template>
     <div id="container">
        <div id="footer">
  <div><van-button type="default" @click="exitLog" class="exitBtn">退出登录</van-button></div>   
   <div><h1 class="title">信息收集</h1></div> 
   <div> <van-button type="default" @click="submitInfo" class="submitBtn">提交信息</van-button></div>
        </div>
    <div id="content">
        <div class="content-left">  <van-cell-group inset>
  <van-field
   :model-value="store.formData.name"
  label="姓名"
  required
  @update:model-value="(value) => updateField('name', value)"
  />
  <div style="margin-left:15px; margin-top:5px;">
    <p>请选择性别</p>
    <input   type="radio" id="male" name="gender" value="男" v-model="store.formData.gender"   @update:model-value="(value) => updateField('gender', value)"  >
<label for="male" >男</label><br>
<input  type="radio" id="female" name="gender" value="女" v-model="store.formData.gender"   @update:model-value="(value) => updateField('gender', value)" >
<label for="female">女</label><br>
</div>
<van-field
   v-model="result"
      is-link
      readonly
      name="datePicker"
      label="出生日期选择"
      placeholder="点击选择日期"
      @click="showPicker = true" required

/>
<van-popup v-model:show="showPicker" position="bottom">
  <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" />
</van-popup>
<div><p  style="margin-top:10px;margin-left:15px;" required>请选择最高学历</p>
<select id="education" style="margin-top:10px;margin-left:15px;color:grey;" v-model="store.formData.highestEducation"   @update:model-value="(value) => updateField('highestEducation', value)" >
    <option value="大专" >大专</option>
    <option value="本科">本科</option>
    <option value="研究生">研究生</option>
    <option value="博士">博士</option>
</select>
</div>
<div>
     <van-field label="专业" v-model="store.formData.major"   @update:model-value="(value) => updateField('major', value)" required/>
      <van-field label="民族" v-model="store.formData.nation"   @update:model-value="(value) => updateField('nation', value)" required/>
       <van-field label="学校"  v-model="store.formData.colleage"   @update:model-value="(value) => updateField('colleage', value)"  required/>
       <div><p  style="margin-top:10px;margin-left:15px;" required>请选择政治面貌</p>
<select id="education" style="margin-top:10px;margin-left:15px;color:grey;" v-model="store.formData.politicalStatus"   @update:model-value="(value) => updateField('politicalStatus', value)" >
    <option value="中共党员" >中共党员</option>
    <option value="群众">群众</option>
    <option value="共青团员">共青团员</option>
    <option value="预备党员">预备党员</option>
   
</select>
</div>
          <van-field label="籍贯" v-model="store.formData.hometown"   @update:model-value="(value) => updateField('hometown', value)"  required/>

           <van-field label="邮箱"  v-model="store.formData.email"   @update:model-value="(value) => updateField('email', value)" required/>
           <van-field label="微信" v-model="store.formData.wechat"   @update:model-value="(value) => updateField('wechat', value)" 
              required/>
           <van-field label="手机"  v-model="store.formData.phone"   @update:model-value="(value) => updateField('phone', value)"  required/>
           <van-cell-group inset>
  
</van-cell-group>

           
</div>
</van-cell-group>

 
</div>
        <div class="content-right">
            <div style="width: 70%;margin-left:-350px;border-radius: 30px;;"> 
     <van-field  rows="5"  autosize  label="校园经历" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"
     v-model="store.formData.schoolExperiences"   @update:model-value="(value) => updateField('schoolExperiences', value)"
     />
     <van-field  rows="10"  autosize  label="项目经历" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"
     v-model="store.formData.projectExperiences"   @update:model-value   ="(value) => updateField('projectExperiences', value)"/>
     <van-field  rows="5"  autosize  label="专业技能" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"
     v-model="store.formData.professionalSkills"   @update:model-value="(value) => updateField('professionalSkills', value)"/>
    <van-field  rows="3"  autosize  label="自我评价" type="textarea"  placeholder="请输入文本" style="margin-left:-15px;"
    v-model="store.formData.selfEvaluation"   @update:model-value="(value) => updateField('selfEvaluation', value)"/>
</div>
        </div>
       
   </div>
 </div>
</template>
<style scoped>

.exitBtn{
   color:black;
   margin-left:235px;
}
.submitBtn{
  color:brown;
  margin-right:350px;

 

  
}
.title{
    color:white;
    font-weight:bold;
    font-size:50px;
}
#container{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
  width: 1738px;
height: 1099px; 
background-image: url('../imgs/背景图片.jpg');
position:fixed;
opacity:0.9;
}
#footer{
    display:flex;
    /* justify-content: center; */
    /* align-items:space-around; */
    /* background-color: rgb(200, 219, 219); */
    width:100%;
    height:100px;
    margin-top:30px;
    align-items: center;
    justify-content: space-between;


}

#content{
    display:flex;
   
    align-items:center;
    justify-content:center;
    /* background-color:rgb(233, 233, 196); */
 width:100%;
 height:90%;

}
.content-left {
  
    display:flex;
    flex-direction:column;
    width:40%;
    height:100%;
    /* background-color: aliceblue; */
    margin-top:50px;
   align-items:center;
  padding-left:100px;


}
.content-right {
    /* background-color: beige; */
    width:60%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
    border-radius: 20px;

}

</style>
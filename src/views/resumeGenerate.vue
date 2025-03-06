<script setup>
import { useResumeInfoStore } from '../stores/resumeInfo.js'  
import { onMounted} from 'vue'
import{showToast}from'vant'
const store = useResumeInfoStore();
onMounted(() => {
  console.log(store) // 确认 store 是否被正确定义
  console.log(store.formData.name) // 确认 formData 是否正确
})

const handleReturn =()=>{
  
   showToast({
     message: '已返回填写页面',
     position:'top',
     style:{color:'grey', backgroundColor: 'rgba(255, 255, 255,0.7) ,height:100px,width:100px;'},
   
   });
    setTimeout(() => {
         window.location.href = '/collectInfo';
    },1000);
}
const projectE='项目经历:'
const schoolE='校园经历:'
const professionals='专业技能:'
const selfEva='自我评价:'
const name='姓名:'
const gender='性别:'
const birthDate='出生日期:'
const highestEducation='学历:'
const major='专业:'
const nation='民族:'
const colleage='学校:'
const hometown='籍贯:'
const email='邮箱:'
const wechat='微信:'
const phone='联系方式:'
const handleDownload =()=>{
   const blob = new Blob([name + store.formData.name +`\n`+ gender+store.formData.gender +`\n`+ birthDate+store.formData.birthDate +`\n`
   +highestEducation+ store.formData.highestEducation + `\n`+major+store.formData.major +`\n`+ nation 
   + store.formData.nation +`\n`+ colleage + store.formData.colleage +`\n`+hometown+ store.formData.hometown +`\n`+ email+store.formData.email +`\n`
   +wechat+ store.formData.wechat +`\n`+phone+ store.formData.phone +`\n\n`+professionals+`\n`+ store.formData.professionalSkills +`\n\n`+ schoolE+`\n`+ store.formData.schoolExperiences +`\n\n`+ projectE
  +`\n` + store.formData.projectExperiences+`\n\n` +selfEva+`\n`+ store.formData.selfEvaluation], { type: 'text/plain;charset=utf-8' });


  // 创建一个URL对象，指向该Blob对象
  const url = URL.createObjectURL(blob);

  // 创建一个a标签用于下载
  const a = document.createElement('a');
  a.href = url;
  a.download = '表格内容.txt'; // 设置下载的文件名

  // 将a标签添加到DOM中并触发点击事件
  document.body.appendChild(a);
  a.click();

  // 移除a标签并释放URL资源
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast({
     message: '下载成功！',
     position:'top',
     style:{color:'grey', backgroundColor: 'rgba(255, 255, 255,0.7) ,height:100px,width:100px;'},
  })
}
</script>
<template>
<div id="container">
    <div id="footer">
   <van-button type="default" class="returnBtn" @click="handleReturn">返回填写</van-button>
   <h1>我的简历</h1>
   <van-button type="default" class="downloadBtn" @click="handleDownload">下载文件</van-button>
    </div>
    <div id="content">
    <div id="resume">
    
      <table width="700" height="500" align="center">
            <!-- <caption>
                <h3>个人简历</h3>
            </caption> -->
            <tr>
                <td width="90">姓名</td>
                <td width="100"> {{ store.formData.name }}</td>
                <td width="89">出生日期</td>
                <td width="113">{{ store.formData.birthDate }}</td>
                <td width="91">性别</td>
                <td width="48">{{ store.formData.gender }}</td>
                <td width="121" rowspan="4">
                   
                     
  
    <div style="width: 100%;height: 100;margin-left: 15px;"><van-uploader v-model="value"  style="background-color:transparent !important; border:none ;width:100%;height:100%;" /></div>
  

                </td>
            </tr>
            <tr>
                <td>学历</td>
                <td>{{ store.formData.highestEducation }}</td>
                <td>专业</td>
                <td>{{ store.formData.major }}</td>
                <td>民族</td>
                <td>{{ store.formData.nation }}</td>
            </tr>
            <tr>
                <td>学校</td>
                <td> {{ store.formData.colleage }}</td>
                <td>政治面貌</td>
                <td>{{ store.formData.politicalStatus }}</td>
                <td>联系方式</td>
                <td>{{ store.formData.phone }}</td>
            </tr>
            <tr>
                <td>籍贯</td>
                <td>{{ store.formData.hometown }}</td>
                <td>邮箱</td>
                <td>{{ store.formData.email }}</td>
                <td>微信</td>
                <td>{{ store.formData.wechat }}</td>
            </tr>
<tr>
                <td>专业技能</td>
                <td colspan="7" >
                    {{ store.formData.professionalSkills }}
                    </td>
            </tr>
            <tr>
                <td>项目经历</td>
                <td colspan="7" >
                    {{ store.formData.projectExperiences }}
                    </td>
            </tr>
            <tr>
                <td>校园经历</td>
                <td colspan="7" >
                    {{ store.formData.schoolExperiences }}
                    </td>
            </tr>
            <tr>
                <td colspan="7" align="center"><b>自我评价</b></td>
            </tr>
            <tr>
                <td colspan="7" height="200">
                    {{ store.formData.selfEvaluation }}
                </td>
            </tr>
        </table>
   
    </div>
</div>
</div>
</template>
<style scoped>
h1{
    font-size: 36px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
    color:white;
}

#container{
    display:flex;
    flex-direction:column;
    align-items:center;
   width: 1738px;
 height: 1099px; 
 background-image: url('../imgs/背景图片.jpg');
 opacity: 0.9;
 position:fixed;

}
#footer{
    display:flex;
    align-items:center;
    /* background-color: rgb(200, 219, 219); */
    width:100%;
    height:100px;
    justify-content: space-between;;
}
#content{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:90%;
    /* background-color: antiquewhite; */
}
#resume{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
   margin-top:7px;

}
.returnBtn{
   margin-left: 250px;
}
.downloadBtn{
     margin-right: 350px;
}
 table {
            border-collapse: collapse;
            
        }

        table,
        td {
            border: 2px solid rgb(30, 29, 29);
        }
</style>
<script setup>


import { useResumeInfoStore } from '@/stores/resumeInfo'  // 确保路径正确

// 需要执行 useResumeInfoStore() 来获取 store 实例
const store = useResumeInfoStore()


const handleReturn =()=>{
   window.location.href = '/collectInfo';
}
</script>
<template>
<div id="container">
    <div id="footer">
   <van-button type="default" class="returnBtn" @click="handleReturn">返回填写</van-button>
   <h1>我的简历</h1>
   <van-button type="default" class="downloadBtn">下载文件</van-button>
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
                <td width="113">2003.5.12</td>
                <td width="91">性别</td>
                <td width="48">男</td>
                <td width="121" rowspan="4">此处没有头像</td>
            </tr>
            <tr>
                <td>学历</td>
                <td>本科</td>
                <td>专业</td>
                <td>智能财务软件工程</td>
                <td>民族</td>
                <td>汉</td>
            </tr>
            <tr>
                <td>学校</td>
                <td> 杭州电子科技大学</td>
                <td>政治面貌</td>
                <td>群众</td>
                <td>联系方式</td>
                <td>10086</td>
            </tr>
            <tr>
                <td>籍贯</td>
                <td>浙江温州</td>
                <td>邮箱</td>
                <td>10086@qq.com</td>
                <td>微信</td>
                <td>10086nb</td>
            </tr>

            <tr>
                <td>项目经历</td>
                <td colspan="7" >
                    <ul>
                        <li>垃圾分类系统前端开发</li>
                        <li>脑卒中后的康复系统前端开发</li>
                        <li>知识产权交易平台前端开发</li>
                         <li>垃圾分类系统前端开发</li>
                        <li>脑卒中后的康复系统前端开发</li>
                        <li>知识产权交易平台前端开发</li>
                         <li>垃圾分类系统前端开发</li>
                        <li>脑卒中后的康复系统前端开发</li>
                        <li>知识产权交易平台前端开发</li>
                         <li>垃圾分类系统前端开发</li>
                        <li>脑卒中后的康复系统前端开发</li>
                        <li>知识产权交易平台前端开发</li>
                        
                    </ul>
                    </td>
            </tr>
            <tr>
                <td colspan="7" align="center"><b>自我评价</b></td>
            </tr>
            <tr>
                <td colspan="7" height="200">
                    我在大学期间任职学习委员，工作认真负责，
                    学习中，踏实学习本专业知识，和小组合作时，负责踏实
                    具有强烈的团队合作精神和工作能力。（套话套话）
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

}
#footer{
    display:flex;
    align-items:center;
    background-color: rgb(200, 219, 219);
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
    background-color: antiquewhite;
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
   margin-left: 50px;
}
.downloadBtn{
     margin-right: 50px;
}
 table {
            border-collapse: collapse;
            
        }

        table,
        td {
            border: 2px solid rgb(86, 86, 86);
        }
</style>
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import {createRouter} from 'vue-router'
import { createWebHistory } from 'vue-router';
import loginPage from './views/loginPAge.vue'
import collectInfo from './views/collectInfo.vue'
import 'vant/lib/index.css'
import ResumeGenerate from './views/resumeGenerate.vue';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const routes =[
    {
        path:'/',
        name:'log',
        component:loginPage
    },
    {
        path:'/collectInfo',
        name:'collect',
        component: collectInfo
    },
    {
        path:'/collectInfo/resumeGenerate',
        name:'generate',
        component:ResumeGenerate
    }
];
const router = createRouter({
    history:createWebHistory(),routes
})
const app = createApp(App);
app.use(pinia);
app.use(router)

app.mount('#app')

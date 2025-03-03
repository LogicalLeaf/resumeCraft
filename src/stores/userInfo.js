import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('useUserInfoSore',{
  state: () => ({

    adminName:ref('admin'),
    adminPassword:ref('123456')

})})

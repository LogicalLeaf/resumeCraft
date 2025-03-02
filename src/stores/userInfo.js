import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('useUserInfoSore',{
  state: () => ({

    name:ref('admin'),
    password:ref('123456')

})})

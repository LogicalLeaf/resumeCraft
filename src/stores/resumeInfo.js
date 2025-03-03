
import { defineStore } from 'pinia';

export const useResumeInfoStore = defineStore('resumeInfo', {
  state: () => ({
    formData: {
      name: '',
      gender: '',
      birthDate: '',
      highestEducation: '',
      major: '',
      nation: '',
      colleage: '',
      politicalStatus: '',
      hometown: '',
      email: '',
      wechat: '',
      phone: '',
    },
  }),
  actions: {
    updateFormData(fieldName, value) {
      this.formData[fieldName] = value;
    },
  },
});

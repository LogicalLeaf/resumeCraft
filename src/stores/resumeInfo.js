
import { defineStore } from 'pinia';
const obj = { key: 'value' };
console.log(Object.prototype.hasOwnProperty.call(obj, 'key')); // true


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
      schoolExperiences: '',
      projectExperiences: '',
      selfEvaluation: '',
    },
    
  }),
  actions: {
    updateFormData(field, value) {
            this.formData[field] = value;
        },
        // 新的通用更新函数
        updateFields(fields) {
            Object.keys(fields).forEach(key => {
                if (Object.prototype.hasOwnProperty.call(this.formData, key)) {
                    this.formData[key] = fields[key];
                }
            });
        }
  },
  persist: true,
});

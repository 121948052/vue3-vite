import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

const vm = createApp(App)
vm.mount('#app')

console.log('vm', vm)
console.log('Vue', Vue)


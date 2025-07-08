import Vue from 'vue'
import App from './App.vue'

//导入vuex里的store
import store from '@/store'

//导入路由
import router from '@/router'

//导入并使用element-ui
import { Input,Checkbox,Button } from 'element-ui'
Vue.component(Input.name,Input)
Vue.component(Checkbox.name,Checkbox)
Vue.component(Button.name,Button)

//导入全局组件
import Header from '@/components/Header'
import Footer from '@/components/Footer'
//全局注册组件
Vue.component('Header',Header)
Vue.component('Footer',Footer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

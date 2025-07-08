import Vue from 'vue'
import Vuex from 'vuex'

//导入和使用vuex
Vue.use(Vuex)


//对于多个模块的使用，需要用对象的方式先将方法和数据进行封装
const userInfo = {
    namespaced: true,
    actions: {
        
    },
    mutations:{
        LOGIN(state,value){
            state.userAccount = value[0]
            state.userPassword = value[1]
            state.userNickname = value[2]
        }
    },
    state:{
        userAccount:'',
        userPassword:'',
        userNickname:''
    }
}


//创建完后就可以导出
export default new Vuex.Store({
    modules:{
        userInfo:userInfo
    }
})
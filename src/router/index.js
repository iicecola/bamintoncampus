//引入vue和vue的路由
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用vue和vuerouter
Vue.use(VueRouter)

import Home from '@/views/Home'
//创建和导出路由实例
export default new VueRouter({
    routes:[
        {
            path: '*',
            redirect:'/home'
        },
        // 以下为五个主要的页面
        {
            //首页
            path:'/home',
            component:Home,
            name:'home',
        },
        {
            //校园
            path:'/campus',
            component: () => import('@/views/Campus'),
            name: 'campus'
        },
        {
            //发现
            path:'/discover',
            component: () => import('@/views/Discover'),
            name: 'discover'
        },
        {
            //用户中心
            path:'/message',
            component: () => import('@/views/Message'),
            name: 'message'
        },
        {
            //用户中心
            path:'/user',
            component: () => import('@/views/UserCenter'),
            name: 'user'
        },

        // 以下为登录注册页面
        {
            path:'/login',
            component:() => import('@/views/Login'),
            name:'login'
        },
        {
            path:'/register',
            component:() => import('@/views/Register'),
            name:'register'
        }
    ]
})
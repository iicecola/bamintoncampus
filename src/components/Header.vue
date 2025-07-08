<template>
  <div class="header-container">
    <ul>
        <li class="header-left-logo"><a href="#home"><img src="@/assets/logo.png" width="100px" height="60px"></a></li>
        <li style="cursor: pointer;" v-for="(item,index) in headerLeftEntry" 
            :key="index"
            @click="$router.push(item.routerUrl)">
            <div class="click">
                <div class="header-left-icon">
                    <img width="25px" :src="item.iconUrl" alt="">
                </div>
                <div class="header-left-item">
                    {{ item.itemTitle }}
                </div>
            </div>
        </li>
    </ul>

    <!-- 未登录时显示登录图标 -->
    <div v-if="!isLogin" class="header-right-userlogin" @click=login>
        <div class="header-right-item">
            登录
        </div>
        <div class="header-right-icon">
            <img width="25px" src="@/assets/header-login.svg" alt="">
        </div>
    </div>

    <!-- 已登录时显示用户昵称和头像 -->
    <div v-else class="header-right-userlogin">
        <div class="header-right-item header-right-userNickname">
            {{ userNickname }}
        </div>
        <div class="header-right-avatar">
            <img width="40px" src="@/assets/header-avatar.svg" alt="">
        </div>
        <div style="float:right;line-height: 64px;font-size:17px"><b><i>Hi ~</i></b></div>
        
    </div>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return {
            isLogin:false,
            headerLeftEntry:[
                {itemTitle:'首页',iconUrl:require('@/assets/header-home.svg'),routerUrl:'/home'},
                {itemTitle:'校园',iconUrl:require('@/assets/header-campus.svg'),routerUrl:'/campus'},
                {itemTitle:'发现',iconUrl:require('@/assets/header-found.svg'),routerUrl:'/discover'},
                // {itemTitle:'消息',iconUrl:require('@/assets/header-message.svg'),routerUrl:'/message'}
            ],
        }
    },
    computed:{
        userNickname(){
            //但是由于在每次刷新或者关闭页面时，vuex都会被释放，导致无法获取到用户信息，所以想要获取存储的信息
            //还是需要通过本地或者后端获取
            // return this.$store.state.userInfo.userNickname
            return localStorage.getItem('userNickname')
        }
    },
    methods:{
        login(){
            this.$router.push('/login')
        }
    },
    mounted(){
        if(localStorage.getItem("userNickname")){
            this.isLogin = true
            console.log("已登录")
        }else{
            console.log("未登录")
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }

    .header-container{
        width: 100%;
        height: 69px;
        box-shadow: 0 2px 2px #00000014;
    }

    .header-left-logo {
        display: block;
        margin-left: 20px;
        float: left;
        border-radius: 15px;
        overflow: hidden;
    }

    .header-left-icon {
        float: left;
        height: 64px;
        margin: 6px 7px 0 0 ;
        text-align: center;
        line-height: 64px;
    }

    .header-left-item {
        /* display: block; */
        float: left;
        height: 64px;
        text-align: center;
        line-height: 64px;
    }
    .click {
        float: left;
        margin-left: 60px;
    }
    .click:active {
        height: 60px;
        float: left;
        background-color: #eee;
    }

    /* 右边的登录和用户信息显示 */

    .header-right-userlogin {
        cursor: pointer;
    }

    /* 未登录时显示登录和图标 */
    .header-right-icon {
        float: right;
        margin: 6px 7px 0 60px;
        line-height: 64px;
    }
    /* 已登录时显示用户昵称和头像 */
    .header-right-avatar {
        float: right;
        margin: 12px 20px 0 30px;
    }

    .header-right-item {
        float: right;
        margin-right: 100px;
        line-height: 64px;
    }

    /* 用户昵称的字体特别设计 */
    .header-right-userNickname {
        font-size: 15px;
        font-weight: 300;
        color: rgb(104, 104, 104)
    }
</style>
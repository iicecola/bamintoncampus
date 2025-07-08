<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//导入路由
import Login from './views/Login'
import Register from '@/views/Register'
import Home from '@/views/Home'

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Home
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

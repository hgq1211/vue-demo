<template>
  <div id="app">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title"><router-link to="/inner">嵌套路由</router-link></template>
        <el-menu-item index="2-1"><router-link to="/inner/inner1">子路由1</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/inner/inner2">子路由2</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/table">element组件元素</router-link></el-menu-item>
      <el-menu-item index="4"><router-link :to="{ name: 'dynamic', params: { id:123 }}">动态传参</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/vueState">状态管理</router-link></el-menu-item>
      <el-menu-item index="6"><router-link to="/vueAxios">http请求</router-link></el-menu-item>
    </el-menu>
    <router-view></router-view>

</div>
</template>


<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  #app{
    text-align: center;
  }
</style>

<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <h3>子组件中传过来的值：{{childData}}</h3>
    <router-view :propMsg="propMsg" @middle="getChildData"></router-view>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      msg: '嵌套路由主页',
      propMsg:'父组件向子组件传值，使用props',
      childData:''
    }
  },
  methods:{
      getChildData(msg){
          this.childData=msg;
          console.log(1234)
      }
  }
}
</script>


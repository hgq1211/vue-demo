<template>
  <div class="hello">
    <h2>{{ propMsg }}</h2>
  <hr>
    <h3>{{ msg }}</h3>
    <el-input v-model="username" @change="toParent"></el-input>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      msg: 'innerChild1',
      username:''
    }
  },
  props:['propMsg'],
  methods:{
      toParent:function(){
          this.$emit('middle',this.username)
      }
  }
}
</script>


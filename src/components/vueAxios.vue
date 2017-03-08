<template>
  <div>
    <p><strong>get到的内容为： </strong>{{$store.state.getData}}</p>
    <p><strong>post到的内容为： </strong>{{postData}}</p>
    <el-button @click="vueGets">get获取</el-button>
    <el-button @click="vuePosts" type="primary">post获取</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  import Qs from 'qs'
  import {getJsons} from '../store'
//  axios.defaults.baseURL = 'http://127.0.0.1:3000';
    export default {
        data(){
            return{
              postData:''
            }
        },
        methods:{
            vueGets:function(){
             this.$store.dispatch('getJsons')
            },
          vuePosts:function(){
            var _self=this;
            var data=Qs.stringify({name:"post1234"})
            axios.post('http://127.0.0.1:3000/vue',data).then(function (response) {
              _self.postData=response.data;
            })
          }
        }
    }
</script>

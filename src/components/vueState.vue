<template>
<div>
  <p><strong>{{ $store.state.num }}</strong></p>
  <p>
    <el-button @click="inc">+</el-button>
    <el-button type="primary" @click="dec">-</el-button>
  </p>
</div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
      computed:mapGetters([
        'isShow'
      ]),
      methods:mapActions([
        'inc',
        'dec',
      ])
    }
</script>

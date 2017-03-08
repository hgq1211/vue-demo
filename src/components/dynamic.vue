<template>
<div>
  <h2>{{msg}}</h2>
  <p><strong>传入的name是： </strong>{{ $route.name }}</p>
  <p><strong>传入的id是： </strong>{{$route.params.id}}</p>
</div>
</template>
<script>
export default {
  name: 'dynamic',
  data () {
    return {
      msg: '动态路由'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

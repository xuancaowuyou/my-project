<template>
  <div id="app">
    <!-- <router-link to="/home">home</router-link> -->
    <!-- <router-link to="/about">about</router-link> -->
    <!-- <router-view></router-view> -->
    <hello-world :msg.sync="msg"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  data(){
    return{
      msg:'父组件传值'
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="changeMsg">子元素修改msg</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
  },
  methods:{
    changeMsg(){
      this.$emit("update:msg",'修改后的值')
    }
  }
}
</script>

<style scoped>
</style>

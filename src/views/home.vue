<template>
    <div>
        <p>我是home--按钮权限（自定义指令）</p>
        <div>
          <button v-has="'add'">添加</button>
          <button v-has="'edit'">编辑</button>
          <button v-has="'delete'">删除</button>
        </div>
    </div>
</template>
<script>
export default {
  name:'MyHome',
  data(){
    return{

    }
  }
}
</script>
<style>
</style>
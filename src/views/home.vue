<template>
    <div style="height:2000px;">
        <h3>我是home</h3>
        <div>______________________</div>
        <p>按钮权限（自定义指令）</p>
        <div>
          <button v-has="'add'">添加</button>
          <button v-has="'edit'">编辑</button>
          <button v-has="'delete'">删除</button>
        </div>
        <div>______________________</div>
        <p> input自动获取焦点（自定义指令）</p>
        <input type="text" v-focus /><button>搜索</button>
    </div>
</template>
<script>

export default {
  name:'MyHome',
  data(){
    return{
    }
  },
  created(){
    const permissionArray = ['add','edit'];
    localStorage.setItem('permissionArray',JSON.stringify(permissionArray))
  },
  mounted(){
    this.$store.dispatch('a_token').then(res=>{
      if(res.data.code==1000){
        localStorage.setItem('accessToken',res.data.data.accessToken)
      }
    })
    let that = this
    setTimeout(function(){
      let params = {
        querySort:['id']
      }
      that.$store.dispatch('a_logistics',params).then(res=>{
          console.log(res)
      })
    },2000)
 
  },
  destroyed(){
    localStorage.removeItem('permissionArray');
  },
  methods:{
  }
}
</script>
<style>
</style>
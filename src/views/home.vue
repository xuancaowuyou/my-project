<template>
    <div>
      <div>{{$store.state.count}}<button @click="handleAdd">++</button></div>
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
  },
  mounted(){
    // console.log(this.$store.state.count)
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
  methods:{
    handleAdd(){
      let newVal =this.$store.state.count++;
      this.$store.m_add_count(newVal)
    }
  }
}
</script>
<style>
</style>
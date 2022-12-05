<template>
    <div style="height:2000px;">
        <p>我是about</p>
        <div>--------------------</div>
        <div>1、ref和nextTick的使用</div>
        <div ref="about">{{num}}</div>
        <button @click="changeNum">修改num</button>
        <div>--------------------</div>
        <div>2、v-if和v-show的使用</div>
        <div v-if="toggle">v-if的案例</div> <!--初始加载用v-if-->
        <div v-show="toggle">v-show的案例</div> <!--频繁切换用v-show-->
        <div>--------------------</div>
        <div>3、v-for和v-if的使用</div>
        <ul>
          <li v-for="(item,index) in fruits" :key="index">{{item.name}}</li>
        </ul>
        <div>--------------------</div>
        <p>store的用法</p>
        <div>
          <button @click="handleReduce">-</button>
          {{$store.state.count}}
          <button @click="handleAdd">+</button>
        </div>
        <div>--------------------</div>

    </div>
</template>
<script>
export default {
  name:'MyAbout',
  data(){
    return{
      toggle:true,
      num:5,
      fruits:[{
          id:1,
          name:'葡萄'
        },{
          id:2,
          name:'苹果'
        },{
          id:3,
          name:'香蕉'
        }]
    }
  },
  mounted(){
  },
  methods:{
    changeNum(){
      this.num =10;
        console.log("innerHTML:"+this.$refs.about.innerHTML);
      this.$nextTick(function(){
        console.log("nextTick:"+this.$refs.about.innerHTML);
      })
    },
    handleReduce(){
        let newVal =this.$store.state.count;
        if(newVal>1){
          this.$store.commit('m_add_count',--newVal);
        }
    },
    handleAdd(){
      let newVal =this.$store.state.count;
      this.$store.commit('m_add_count',++newVal);
    }
  }
}
</script>

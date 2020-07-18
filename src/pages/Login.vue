<template>
  <div>
      <el-button type="primary" id="btn" @click='go'>登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    go(){
      this.$router.push('/index')
    }
  }
}
</script>

<style style='scss'>
  .el-button--primary{
    height:60px;
  }
</style>

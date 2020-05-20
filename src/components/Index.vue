<template>
    <div class="index-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="index-card">
            <h4>{{ title }}</h4>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: '欢迎登录科大商铺后台管理系统'
    }
  }
}
</script>
<style lang="less" scoped>
.index-container {
    height: 100%;
}
.index-card {
    margin-top: 20px;
    height: 100%;
}
</style>

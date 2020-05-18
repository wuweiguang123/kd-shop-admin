<template>
    <el-container class="home-container">
      <el-header>
        <span class="home-title">科大商铺后台管理系统</span>
        <el-button type="info" plain @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-cooperation"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="2-1">角色列表</el-menu-item>
              <el-menu-item index="2-2">权限列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="3-1">商品列表</el-menu-item>
              <el-menu-item index="3-2">分类参数</el-menu-item>
              <el-menu-item index="3-3">商品分类</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="4-1">订单列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="5-1">数据报表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主体区域 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    logout () {
      this.$confirm('确定退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }).catch(() => {
        return false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #409EFF;
  line-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .home-title {
    font-size: 20px;
    font-family: "微软雅黑";
    font-weight: 700;
    color: #fff;
    flex: 1
  }
}
.el-aside {
  background-color: #FFFFFF
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-main {
  background-color: #f2f2f2
}
</style>

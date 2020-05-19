<template>
    <el-container class="home-container">
      <el-header>
        <span class="home-title">科大商铺后台管理系统</span>
        <el-button type="info" plain @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="slide-bar" @click="slideMenu">|||</div>
          <el-menu :collapse="isCollapse" :unique-opened="true"
                   :collapse-transition="false" router :default-active="activePath">
            <el-submenu :index="menu.id + ''" v-for="menu in menusList" :key="menu.id">
              <template slot="title">
                <i :class="menu.menuIcon"></i>
                <span>{{ menu.menuName }}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="childMenu.menuPath" @click="setActivePath(childMenu.menuPath)" v-for="childMenu in menu.children" :key="childMenu.id">
                <i class="el-icon-menu"></i>
                <span>{{ childMenu.menuName }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主体区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isCollapse: false,
      menusList: [],
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
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
    },
    getMenuList () {
      this.$http.get('menus/list').then(response => {
        if (response.data.code === '3000') {
          this.$message({
            message: '用户Token过期，请重新登录！',
            type: 'error'
          })
          window.sessionStorage.clear()
          this.$router.push('/login')
        } else if (response.data.code === '200') {
          this.menusList = response.data.data
        } else {
          this.$message({
            message: '服务器异常，请联系管理员！',
            type: 'error'
          })
        }
      })
    },
    // 保存菜单的激活状态
    setActivePath (activePath) {
      this.activePath = activePath
    },
    slideMenu () {
      this.isCollapse = !this.isCollapse
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
  background-color: #FFFFFF;
  .slide-bar {
    text-align: center;
    letter-spacing: 3px;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #999;
    border-bottom: 1px solid #e6e6e6;
  }
  .el-menu {
    border-right: 0
  }
}
.el-main {
  background-color: #f2f2f2
}
</style>

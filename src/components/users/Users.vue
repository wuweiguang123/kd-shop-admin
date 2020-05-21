<template>
    <div class="user-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card class="box-card">
            <el-input placeholder="请输入内容" class="input-with-search" v-model="userName">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="primary">添加用户</el-button>
            <!-- 表格区域 -->
            <el-table :data="userList" border stripe style="width: 100%">
                <!-- 序号列 -->
                <el-table-column type="index"></el-table-column>
                <el-table-column
                    prop="username" label="用户名">
                </el-table-column>
                <el-table-column
                    prop="sex" label="性别">
                </el-table-column>
                <el-table-column
                    prop="phone" label="手机号">
                </el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.status"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" icon="el-icon-edit" @click="editUser(scope.$index, scope.row)"></el-button>
                        <el-button size="mini" type="danger" icon="el-icon-delete" @click="delUser(scope.$index, scope.row)" ></el-button>
                        <el-button size="mini" type="warning" icon="el-icon-setting"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页工具栏 -->
            <el-pagination
                :pageNum="pageNum"
                :page-sizes="[2, 5, 10, 20]"
                :pageSize="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      userList: [],
      userName: '',
      pageNum: 1,
      pageSize: 2,
      total: 0
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    getUserList () {
      this.$http.post('user/findUsers',
        { pageNum: this.pageNum, pageSize: this.pageSize, userName: this.userName }).then(response => {
        if (response.data.code === '3000') {
          this.$message({
            message: '用户Token过期，请重新登录！',
            type: 'error'
          })
          window.sessionStorage.clear()
          this.$router.push('/login')
        } else if (response.data.code === '200') {
          console.log(response.data.data)
          this.userList = response.data.data.records
          this.total = response.data.data.total
        } else {
          this.$message({
            message: '服务器异常，请联系管理员！',
            type: 'error'
          })
        }
      })
    },
    editUser (index, row) {
      console.log(index, row)
    },
    delUser (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
    height: 100%;
}
.box-card {
    margin-top: 20px;
}
.input-with-search {
    width: 232px;
    margin-right: 20px;
}
.el-table {
    margin-top: 15px;
}
.el-pagination {
    margin-top: 10px;
}
</style>

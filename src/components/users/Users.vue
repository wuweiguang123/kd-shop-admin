<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card class="box-card">
            <el-input placeholder="请输入内容" class="input-with-search">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button type="primary">添加用户</el-button>
            <!-- 表格区域 -->
            <el-table :data="userList" stripe style="width: 100%">
                <el-table-column
                    prop="date" label="日期">
                </el-table-column>
                <el-table-column
                    prop="name" label="姓名">
                </el-table-column>
                <el-table-column
                    prop="address" label="地址">
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
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      userList: [
        { date: '2020', name: '小虎', address: '上海', status: true },
        { date: '2020', name: '小黑', address: '上海', status: false }
      ]
    }
  },
  methods: {
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
.box-card {
    margin-top: 20px;
}
.input-with-search {
    width: 232px;
    margin-right: 20px;
}
</style>

<template>


  <div class="list">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100">
      </el-table-column>
      <el-table-column prop="role_name" label="角色" width="180">
      </el-table-column>
      <el-table-column prop="anime_name" label="番名" width="210">
      </el-table-column>
      <el-table-column prop="role_introduction" label="描述" width="300">
      </el-table-column>
      <el-table-column label="操作" width="209">
        <template slot-scope="scope">
          <el-button type="text" size="small" class="el-icon-view" @click=pictureview(scope.row)> </el-button>
          <el-button type="text" size="small" class="el-icon-edit" @click="handleClick(scope.row)"></el-button>
          <el-button type="text" size="small" class="el-icon-folder-delete"  @click="handleDelete(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="dialogFormVisible">
      <TabView  @disvisible='disvisible' :currenttableDate='currenttableDate'/>
    </el-dialog>

    <el-dialog :title="currentpicture.role_name":visible.sync="pictureflag">
      <PictureView @disvisible='pictureflag=false' :currentpicture="currentpicture" />
    </el-dialog>

    <el-pagination background layout="prev, pager, next" :total="pagetotal" @current-change="handleCurrentChange">
    </el-pagination>
  </div>

</template>


<script>
  import TabView from './cpts/TabView.vue'
  import PictureView from './cpts/PictureView.vue'
  
  import { getHomeList, getListDelete } from "@/api/Home.js"
  export default {
    name: "NaVideo",
    components: {
      TabView,
      PictureView
    },
    data() {
      return {
        tableData: [],
        flag: '',
        pagetotal: 0,
        currentpage: 1,
        dialogFormVisible:false,
        currenttableDate:{},
        currentpicture:{},
        pictureflag:false,
        deleteId:0,
        
      }
    },
   mounted() {
      this.getHomeList()
    },




    methods: {
      pictureview(row) {
        this.pictureflag = true
        this.currentpicture = row
      },
      handleDelete(row) {
        this.deleteId = row.id
        this.$confirm('此操作将永久删除该此记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.getListDelete()
        }).catch(() => {
          setTimeout(() => {
            this.$message({
              showClose: true,
              type: 'info',
              message: '已取消删除'
            });
          }, 500)

        });
      },
      handleCurrentChange(val) {
        
        this.currentpage = val

        this.getHomeList()
      },
      handleClick(row) {
        this.currenttableDate = row
        this.dialogFormVisible=true
       
      },
     

      disvisible() {
        this.dialogFormVisible = false
      },
      async getHomeList() {
        let res = await getHomeList({
          page_size: 4,
          page_index: this.currentpage
        })

        if (res) {
          
          this.tableData = res.data.data
          this.pagetotal = res.data.page.total/4*10
          console.log(res)
        }
      },
      async getListDelete() {
        let res = await getListDelete({
          id: this.deleteId
        })
        
        if (res.data.result) {
          console.log(res)
          console.log(this.deleteId)
          setTimeout(() => {
            this.$message({
              showClose: true,
              message: "删除成功",
              type: 'success'
            });
          }, 100)


        } else {
          setTimeout(() => {
            this.$message({
              showClose: true,
              message: "删除失败",
              type: 'error'
            });
          }, 100)

        }

     this.getHomeList()
    },

    }
  }
</script>
<style>
  .el-pagination {
    margin-top: 20px;
    padding: 2px 0;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: var(--color-tint);
  }
</style>
<style lang="less" scoped>
  .el-icon-view {
    color: var(--color-tint) !important;
  }

  .el-icon-edit {
    color: skyblue;
  }

  .el-icon-folder-delete {
    color: orange;
  }
</style>
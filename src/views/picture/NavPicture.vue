<template>
    <div class="picture">
        <div class="picture-body">
            <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
                <el-tab-pane label="列表" name="first" ></el-tab-pane>
                <el-tab-pane label="添加角色" name="second" ></el-tab-pane>
                <el-tab-pane label="添加图片" name="third" ></el-tab-pane>
            </el-tabs>

            <!--is实现多个组件在同一个挂载点-->
            <component :is="currentView"></component>

        </div>
    </div>
</template>
<script>
    import List from "./cpts/List"
    import Person from "./cpts/Person"
    import AddPicture from "./cpts/AddPicture"
    export default {
        name: "NavPicture",
        data() {
            return {
                currentView: 'List',
                activeName: 'first',
                view:[
                List,
               Person,
               AddPicture,
                ]
            }
        },
        components: {
            List,
            Person,
            AddPicture,
        },
        methods: {
            handleClick(tab, event) {
                this.currentView = this.view[tab.index];
            }
        }
    }
</script>
<style lang="less">
  .el-tabs__item.is-active {
    color:var(--color-tint) ;
}
.el-table thead {
    font-size: 18px;
}

.el-tabs__header {
    margin-bottom: 35px;
}
.el-button--text { 
    font-size: 20px;
    padding: 10px 10px;
    font-weight: 600;
   

}
</style>
<style lang="less" scoped>
    .picture {
        padding: 10px 30px;
        margin-top: 30px;
        margin-left: 30px;
        border-left: 2px solid #EBEEF5;


        .picture-body {

            width: 1000px;
        }

    }
</style>
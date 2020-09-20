<template>
    <div class="addinput">
        <div class="name add">
            <div class="label">角色:</div>
            <el-input placeholder="请输入内容" v-model="currenttableDate.role_name" clearable>
            </el-input>
        </div>
        <div class="anime_name add ">
            <div class="label">番名:</div>
            <el-input placeholder="请输入内容" v-model="currenttableDate.anime_name" clearable>
            </el-input>
        </div>
        <div class="role_introduction add">
            <div class="label">角色描述:</div>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="请输入内容"
                v-model="currenttableDate.role_introduction">
            </el-input>
        </div>
        <el-dialog width="30%" :title="title" :visible.sync="innerVisible" append-to-body>
        </el-dialog>
        <div slot="footer" class="dialog-footer">
            <el-button @click='disvisible'>取 消</el-button>
            <el-button type="primary" @click="editList">确 定</el-button>
        </div>
    </div>
</template>
<script>
    import { editList } from "@/api/Home.js"
    export default {
        name: "TabView",
        data() {
            return {
                innerVisible: false,
                title: ''
            }
        },
        props: {
            currenttableDate: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            disvisible() {
                this.$emit('disvisible')
            },
            async editList() {
                let res = await editList({
                    id: this.currenttableDate.id,
                    role_name: this.currenttableDate.role_name,
                    anime_name: this.currenttableDate.anime_name,
                    role_introduction: this.currenttableDate.role_introduction
                })
               
                if (res) {
                     this.$emit('disvisible')
                    if (res.data.result) {
                        this.title = "编辑成功"
                            
                    } else {
                        this.title = "内容不能为空"  
                    } 
                }else {
                        this.title = "编辑失败"  
                }
                setTimeout(() => {
           this.innerVisible = true
          }, 500)
                
            }
        }
    }
</script>
<style lang="less" scoped>
    .add {

        margin-bottom: 20px;

        .label {
            margin-bottom: 10px;
            color: var(--color-tint);
            font-size: 16px;
            font-weight: 600
        }
    }

    .dialog-footer {
        margin-top: 30px;
    }
</style>
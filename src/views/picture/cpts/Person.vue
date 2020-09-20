<template>
    <div class="addinput">
        <div class="name add">
            <div class="label">角色:</div>
            <el-input placeholder="请输入内容" v-model="input1" clearable>
            </el-input>
        </div>
        <div class="anime_name add ">
            <div class="label">番名:</div>
            <el-input placeholder="请输入内容" v-model="input2" clearable>
            </el-input>
        </div>
        <div class="role_introduction add">
            <div class="label">角色描述:</div>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="请输入内容" v-model="textarea2">
            </el-input>
        </div>
        <div class="submit add">
            <el-button type="danger" plain @click='getListAdd'>Submit</el-button>
        </div>

    </div>

</template>
<script>
    import { getListAdd } from "@/api/Home.js"
    export default {
        name: "AddPicture",
        data() {
            return {
                input1: '',
                input2: '',
                textarea2: ''
            }
        },
        methods: {
            // ListAdd() {
            //     if (this.input1 == '') {
            //         this.$message({
            //             showClose: true,
            //             message: "请输入角色",
            //             type: 'error',

            //         });
            //         return
            //     } else if (this.input2 == '') {
            //         this.$message({
            //             showClose: true,
            //             message: "请输入番名",
            //             type: 'error',
            //         });
            //         return
            //     } else if (this.textarea2 == '') {
            //         this.$message({
            //             showClose: true,
            //             message: "请添加角色描述",
            //             type: 'error',
            //         });
            //         return
            //     } else {
            //        this.getListAdd()
            //     }
            // },

            async getListAdd() {

                let res = await getListAdd({
                    role_name: this.input1,
                    anime_name: this.input2,
                    role_introduction: this.textarea2,
                })
                if (res) {

                    console.log(res)
                    this.$message({
                        showClose: true,
                        message: "添加成功",
                        type: 'success'
                    });

                }

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
            font-size: 18px;
            font-weight: 600
        }
    }

    .submit {
        margin-top: 70px;
    }
</style>
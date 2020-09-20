<template>
    <div class="addinput" >
        <div class="name add">
            <div class="label">选择图片:</div>
            <input type="file" @change="change" accept="image/*"/>
        </div>
        <div class="anime_name add ">
            <div class="label">角色名:</div>
            <el-input placeholder="请输入内容" v-model="role_name" clearable>
            </el-input>
        </div>
        <div class="role_introduction add">
            <div class="label">番名:</div>
            <el-input placeholder="请输入内容" v-model="anime_name" clearable>
            </el-input>
        </div>
        <div class="submit add">
            <el-button :loading="loading" type="danger" plain @click='submit'>Submit</el-button>
        </div>

    </div>

</template>
<script>
    import { uploadFile } from "@/api/Home.js"
    export default {
        name: "AddPicture",
        data() {
            return {
                input: '',
                role_name: '',
                anime_name: '',
                img_file: null,
                loading: false
            }
        },
        methods: {
            change(e) {
                console.log('file', e.target.files[0]);
                this.img_file = e.target.files[0]
            },
            async submit() {
                let formData = new FormData();
                formData.append('role_name', this.role_name);
                formData.append('anime_name', this.anime_name);
                formData.append('img_file', this.img_file);
                this.loading = true
                let res = await uploadFile(formData)
                this.loading = false
                let { result, message, data } = res.data
                if (result) {
                    this.$message({
                        showClose: true,
                        message: message || '操作成功！',
                        type: 'success'
                    });
                }else{
                    this.$message({
                        showClose: true,
                        message: message ||"操作失败",
                        type: 'error'
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
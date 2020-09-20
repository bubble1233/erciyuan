<template>
    <div class="body">
        <div class="image-list">
            <div class="image-list-item" v-for="(item,index) in imgList" :key="index">
                <el-image style="width: 100%" :src="item" :preview-src-list="imgList">
                </el-image>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button @click='disvisible'>取 消</el-button>
        </div>
    </div>

</template>
<script>
    import { pictureview } from "@/api/Home.js"
    export default {
        name: "PictureView",
        data() {
            return {
                imgList: []
            }
        },
        props: {
            currentpicture: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        created() {
            this.pictureview()
        },
        methods: {
            disvisible() {
                this.$emit('disvisible')
            },
            async pictureview() {
                let res = await pictureview({
                    keywords: this.currentpicture.role_name,
                    blur: 1
                })
                let { result, message, data } = res.data
                if (result) {
                    this.imgList = data.map((item) => {
                        return 'https://www.suzumiya.club:6363/' + item.img_src
                    })
                }
                console.log(this.imgList)
            }


        }
    }
</script>

<style lang="less" scoped>
    .body {

        border-top: 1px solid #ccc;
        margin: -20px -20px 0;
        padding: 10px 10px;

        .image-list {
            display: flex;
            flex-wrap: wrap;

            .image-list-item {
                width: 32.5%;
                margin-right: 5px;
                border: 1px solid #ccc;
                padding: 5px;
                border-radius: 3px;


            }
        }

        .dialog-footer {
            margin-top: 40px;
        }
    }
</style>
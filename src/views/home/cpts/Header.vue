<template>
    <div class="header">
        <div>
            <i class="fa fa-cog fa-spin" style="color:black;margin-right:5px"></i>
            次元界后台管理系统
        </div>

        <div class="person" @click="isVisible">
            <img src="@/assets/img/cookie.jpg" alt="">
            <span class="el-icon-caret-bottom"></span>
            <div class="call" v-show="visible">
                <span :class="{active:flag}" @click.stop="exit">退出</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                visible: false,
                flag: false
            };
        },
        methods: {
            isVisible() {
                this.visible = !this.visible
            },
            exit() {
                this.flag = true
                
                setTimeout(() => {
                   this.visible = false
                  
               }, 500)
                setTimeout(() => {
                   
                    this.$router.push('/login');
                }, 1000)
            }
        }
    }
</script>
<style lang="less" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--color-tint);
        padding: 10px 30px;
        color: #fff;
        font-size: 20px;
        box-sizing: border-box;

        .person {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            border: 1px dotted white !important;
            height: 44px;
            width: 74px;

            img {
                width: 30px;
                margin-right: 5px;
            }

            .call {
                position: absolute;
                z-index: 1;
                width: 160px;
                height: 50px;
                background-color: #ffffff;
                border: 1px solid hotpink;
                border-radius: 5px;
                padding: 8px 0;
                top: 45px;
                right: 5px;

                span {
                    display: block;
                    color: hotpink;
                    width: 100%;
                    font-size: 16px;
                    line-height: 34px;
                    padding-left: 20px;

                    &:hover {
                        background-color: rgb(225, 241, 240)
                    }

                }

                .active {
                    background-color: var(--color-tint) !important;
                    color: #fff;
                }
            }
        }

    }
</style>
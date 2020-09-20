<template class=LeftNav>
    <dl class="nav">
        <dd v-for="(item , index) in list" :key="index"
         @click.stop="ddClick(item.path , index)"
         :class="{'on': currentIndex === index}">
            <span><i :class="item.class"></i></span>
            <p>{{item.title}}</p>
        </dd>
       

      <!--  <dd :class="{active:flag}" @click.stop="ddClick('/home/navpicture')">
            <span><i class="el-icon-picture"></i></span>
            <p>图片管理</p>
        </dd>
        <dd  @click="ddClick('/home/navmusic')">
            <span><i class="el-icon-headset"></i></span>
            <p>音乐管理</p>
        </dd>
        <dd @click="ddClick('/home/navvideo')">
            <span><i class="el-icon-film"></i></span>
            <p>视频管理</p>
        </dd>-->
    </dl>
</template>
<script>
    export default {
        name: 'LeftNav',
        data() {
            return {
                list:[
                    {
                       id:1,
                       class:'el-icon-picture',
                       path:'/home/navpicture',
                       title:'图片管理'
                    },
                    {
                       id:2,
                       class:'el-icon-headset',
                       path:'/home/navmusic',
                       title:'音乐管理'
                    },
                    {
                       id:3,
                       class:'el-icon-film',
                       path:'/home/navvideo',
                       title:'视频管理'
                    }
                ],
               currentIndex: 0
            }
        },

        methods: {
            ddClick(path,index) {
                
                this.$router.replace(path)
                this.currentIndex = index
             console.log(path)
            }

        }
    }
</script>

<style lang="less" scoped>
    .nav {
        
        margin: 30px 40px;
        border: 1px solid var(--color-tint);
        width: 140px !important;
        color: var(--color-tint);
        border-radius: 5px;
          height: 148px;

            .on  {
                background-color: var(--color-tint);
                color: #fff !important;
            }

        dd {
            display: flex;
            padding: 15px 0;
            justify-content: center;
            border-bottom: 1px solid var(--color-tint);

            &:hover {
                color: hotpink;
            }

            &:last-child {
                border-bottom: none;
            }

            span {
                margin-right: 10px;
            }
        }
    }
</style>
<template>
  <div>
    <Header/>
    <div class="body">
       <LeftNav></LeftNav>
    <router-view ></router-view>
    </div>
   
  </div>
</template>
<script>
import Header from "./cpts/Header.vue";
import LeftNav from "./cpts/LeftNav.vue";
export default {
    name: 'Home',
    components: {
      Header,
      LeftNav
    }
}
</script>
/home/music
home>music>musicDetail

<style scoped lang="less">
.body {
  display: flex;
}
</style>
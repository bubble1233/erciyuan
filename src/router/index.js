import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue"
import Home from "@/views/home/Home.vue"

const NavMusic = (resolve) => require(["@/views/music/NavMusic.vue"], resolve)
// const  NavPicture = (resolve) => require(["@/views/home/cpts/NavPicture.vue"], resolve)
// const  NavVideo = (resolve) => require(["@/views/home/cpts/NavVideo.vue"], resolve)
const NavPicture = () => import("@/views/picture/NavPicture.vue")
const NavVideo = () => import("@/views/video/NavVideo.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,

    children: [
      // {
      //   path: '',
      //   redirect: '/home/navpicture',
      // },
      {
        path: 'navpicture',
        component: NavPicture,
      },
      {
        path: 'navvideo',
        component: NavVideo,
      },
      {
        path: 'navmusic',
        component: NavMusic,
      }

    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

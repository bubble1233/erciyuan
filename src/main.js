import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false

/**注册element-ui组件为全局vue组件 */
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
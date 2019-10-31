import Vue from 'vue';
import router from './router';
import app from './app.vue';
import '../mock/index';
import store from './store';
import { sync } from 'vuex-router-sync';

// 将路由状态同步到store中
sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(app),
})


// webpack热更新支持
if (module.hot) {
  module.hot.accept()
}
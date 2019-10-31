import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routerConfig';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      x: 0,
      y: 0
    }
  }
});

export default router;

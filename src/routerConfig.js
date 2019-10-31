const routes = [{
    path: '/',
    name: 'zy',
    component: () =>
      import(
        /* webpackChunkName: "zy" */
        '@/pages/zy.vue'
      )
  },
  {
    path: '/test',
    name: 'test',
    component: () =>
      import(
        /* webpackChunkName: "test" */
        '@/pages/test.vue'
      )
  }, {
    path: '/real',
    name: 'real',
    component: () =>
      import(
        /* webpackChunkName: "real" */
        '@/pages/real.vue'
      )
  }
];
export default routes;